# Déploiement — aboudrar.dev

Monorepo npm (workspaces). Les 3 sites statiques sont hébergés sur **GitHub
Pages** (un repo par site + un custom domain), et le formulaire de contact est
un **Cloudflare Worker** (envoi d'emails via Resend).

| Site | Domaine | App | Framework | Repo de déploiement |
|---|---|---|---|---|
| Portfolio | `younes.aboudrar.dev` | `apps/portfolio` | SvelteKit (`adapter-static`) | `Younes-Aboudrar/younes.aboudrar.dev` |
| Wiki | `abwiki.aboudrar.dev` | `apps/wiki` | Astro Starlight | `Younes-Aboudrar/abwiki.aboudrar.dev` |
| Blog | `blog.aboudrar.dev` | `apps/blog` | Astro | `Younes-Aboudrar/blog.aboudrar.dev` |
| API contact | `contact.aboudrar.dev` | `workers/contact` | Cloudflare Worker | — (Workers, pas de repo) |

## Prérequis

- Compte GitHub **Younes-Aboudrar** ; les 3 repos de déploiement existent déjà
  et ont GitHub Pages activé sur la branche `gh-pages` avec le custom domain.
- Zone DNS `aboudrar.dev` sur Cloudflare (les sous-domaines + SSL se gèrent dans
  le dashboard).
- Compte [Resend](https://resend.com) avec le domaine `aboudrar.dev` vérifié.
- Node ≥ 22.23.4 (validation locale avec Node 24.22.1). Node 26 dans CI (GitHub Actions).

## Construire localement

```bash
npm ci --ignore-scripts
npm run build          # build les 3 apps
npm run check          # svelte-check (portfolio) + astro check (wiki, blog)
```

Sorties de build :

- `apps/portfolio/build` (adapter-static)
- `apps/wiki/dist`
- `apps/blog/dist`

## Déploiement automatique (GitHub Actions)

Workflow `.github/workflows/deploy-pages.yml` :

1. Sur chaque push vers `main` (ou déclenchement manuel via *Actions*).
2. Installe avec `npm ci --ignore-scripts`, contrôle les dépendances, exécute les
   tests du Worker et les diagnostics, puis construit les trois applications et
   exécute les tests Chromium. Lit ensuite `apps/portfolio/src/lib/site-status.json`
   pour choisir entre les sites complets et leurs pages de pause.
3. Pousse chaque sortie vers la branche `gh-pages` de son repo de déploiement
   avec le fichier `CNAME` correspondant, via l'action
   `peaceiris/actions-gh-pages` (token `GH_PAGES_DEPLOY_TOKEN`, secret du repo
   `Younes-Aboudrar/portfolio`).

Environnement du build portfolio : `PUBLIC_CONTACT_ENDPOINT=https://contact.aboudrar.dev/api/contact`.
Les tokens `PUBLIC_CF_ANALYTICS` (optionnels) peuvent être ajoutés en variables
du workflow si tu veux réactiver Cloudflare Web Analytics.

### Pause temporaire du wiki et du blog

`apps/portfolio/src/lib/site-status.json` contrôle les liens dans le portfolio
et les publications du wiki et du blog. Actuellement, `wiki` et `blog` valent
`false` : leurs liens sont masqués et le workflow publie une page de pause à
la place de chaque site. Les anciennes URL affichent aussi la page de pause
via `404.html`. Les contenus sources restent conservés dans `apps/wiki` et
`apps/blog`.

Pour réactiver un site, passer son réglage à `true` et pousser sur `main`.
Le workflow reconstruit alors le site complet et rétablit ses liens dans le
portfolio. Les domaines et la configuration GitHub Pages restent en place.
Pour préparer les pages de pause localement : `node scripts/prepare-sites.mjs`.

### Repos de déploiement

- `Younes-Aboudrar/younes.aboudrar.dev` → branche `gh-pages`, custom domain `younes.aboudrar.dev`
- `Younes-Aboudrar/abwiki.aboudrar.dev` → branche `gh-pages`, custom domain `abwiki.aboudrar.dev`
- `Younes-Aboudrar/blog.aboudrar.dev` → branche `gh-pages`, custom domain `blog.aboudrar.dev`

Chaque repo contient un fichier `CNAME` (géré automatiquement par le workflow)
et un `.nojekyll` (pour que GitHub ne passe pas les `_app/` / `_astro/` au
moteur Jekyll).

## DNS (Cloudflare)

Dans le dashboard Cloudflare → **aboudrar.dev → DNS → Records** :

| Type | Nom | Cible | Proxy |
|---|---|---|---|
| CNAME | `younes` | `younes-aboudrar.github.io` | DNS only (gris) |
| CNAME | `abwiki` | `younes-aboudrar.github.io` | DNS only (gris) |
| CNAME | `blog` | `younes-aboudrar.github.io` | DNS only (gris) |
| CNAME | `contact` | `contact.<subdomain>.workers.dev` | Proxied (orange) |

Les CNAME des sites GitHub Pages doivent rester en **DNS only** : GitHub Pages
sert déjà son propre certificat SSL, et un proxy interposerait un TLS en plus.

Le Worker utilise une **route** de zone (`contact.aboudrar.dev/*` dans
`wrangler.toml`) : il faut donc un enregistrement DNS proxied (orange) pour
`contact.aboudrar.dev` (n'importe quelle cible, p. ex. `contact.<subdomain>.workers.dev`).
Le déploiement se fait avec `wrangler deploy` ; si un enregistrement DNS existe
déjà, la bascule en *Custom Domain* (`custom_domain = true`) est impossible
sans le supprimer d'abord.

## Worker `contact`

```bash
cd workers/contact
npx wrangler login     # autorise le compte Cloudflare dans le navigateur
npm run dev -- --env development  # local, utilise .dev.vars.development
npm run deploy         # déploie la route de zone contact.aboudrar.dev/*
```

### Secrets et variables

- `npx wrangler secret put RESEND_API_KEY` — clé API Resend (dashboard Resend →
  API Keys).
- Variables définies dans `wrangler.toml` :
  - `CONTACT_TO` = `younes@aboudrar.dev`
  - `CONTACT_FROM` = `contact@aboudrar.dev` (domaine à vérifier chez Resend :
    ajouter les enregistrements DNS `_resend.domainkey.aboudrar.dev` /
    `_resend.dkim.aboudrar.dev` TXT/CNAME pour valider `aboudrar.dev`)
  - `CONTACT_REPLY_PREFIX` = `contact -`

### API

`POST https://contact.aboudrar.dev/api/contact`

```json
{ "name": "Jean", "email": "jean@example.com", "message": "Bonjour..." }
```

CORS : seule l'origine `https://younes.aboudrar.dev` est autorisée. Les emails
sont envoyés vers `younes@aboudrar.dev` avec `reply_to` = l'email du visiteur.

### Protection du formulaire

Le Worker applique deux bindings Cloudflare Rate Limiting définis dans
`wrangler.toml` : 5 tentatives par minute et par adresse IP, et 20 tentatives
par minute pour l'ensemble du formulaire. Ces limites sont **approximatives et
locales à chaque point de présence Cloudflare**, pas un quota mondial strict.
Les namespaces `1001` et `1002` doivent être réservés à ces limites dans le
compte Cloudflare ; les changer si un autre Worker les utilise déjà.

L'adresse vient de `CF-Connecting-IP`, fourni par Cloudflare. Sans cette adresse
ou sans bindings fonctionnels, le Worker refuse l'envoi avec un statut 503.
Une limite atteinte produit un statut 429 avec `Retry-After: 60`. Le champ piège
`website` est aussi vérifié côté serveur. Le corps JSON est limité à 32 Kio
pendant sa lecture ; les valeurs nulles, tableaux et champs invalides sont rejetés.
L'appel à Resend expire après 10 secondes.

Ces protections réduisent les rafales de spam ; elles ne constituent pas une
preuve humaine et ne bloquent pas tous les abus distribués. Un défi Turnstile
vérifié côté serveur ou un quota strict via Durable Object peut compléter cette
protection si nécessaire. Aucun nouveau secret n'est requis pour ces bindings.

Exécuter `npm test` à la racine pour les tests du Worker (Resend simulé, aucun
email réel). Après revue, déployer le Worker avec `npm run deploy --workspace
@aboudrar/contact-worker` pour activer les bindings et la validation en production.
Le workflow GitHub Pages ne déploie pas le Worker.

## Ajuster le contenu

- **Portfolio** : textes dans `apps/portfolio/src/lib/i18n/fr.ts` et `en.ts` ;
  photos dans `apps/portfolio/static/images/` (voir plus bas).
- **Wiki** : notes Markdown dans `apps/wiki/src/content/docs/`. Copier
  `fr/_note-template.md` pour chaque nouvelle note, puis push (le site se
  reconstruit tout seul).
- **Blog** : articles dans `apps/blog/src/content/posts/`.

### Photos à ajouter

- `apps/portfolio/static/images/profile.jpg` (800×800)
- `apps/portfolio/static/images/og-default.jpg` (1200×630)
- `apps/portfolio/static/images/projects/<slug>.jpg` (les 4 slugs dans `fr.ts`)
- `apps/blog/public/images/avatar.jpg` (256×256, optionnel)

Tant que ces fichiers n'existent pas, des placeholders (monogramme/dégradé) sont
affichés automatiquement.

## Sécurité

Conserver les secrets hors du dépôt. Le secret `GH_PAGES_DEPLOY_TOKEN` est stocké
sur GitHub et utilisé uniquement par le workflow pour publier les trois sites.
L'authentification Git de la machine qui pousse vers `main` est distincte de ce
token. Le déploiement du Worker exige une connexion Wrangler au compte Cloudflare
ou les variables sécurisées `CLOUDFLARE_API_TOKEN` et `CLOUDFLARE_ACCOUNT_ID`.
Voir [SECURITY.md](SECURITY.md) pour les protections et les dépendances restantes.
