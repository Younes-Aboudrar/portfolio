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
- Node ≥ 20 (testé avec Node 26). `NODE_VERSION=26` dans CI (GitHub Actions).

## Construire localement

```bash
npm install
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
2. Build les 3 apps (`npm ci` à la racine + `npm run build --workspace <pkg>`).
3. Pousse chaque sortie vers la branche `gh-pages` de son repo de déploiement
   avec le fichier `CNAME` correspondant, via l'action
   `peaceiris/actions-gh-pages` (token `GH_PAGES_DEPLOY_TOKEN`, secret du repo
   `Younes-Aboudrar/portfolio`).

Environnement du build portfolio : `PUBLIC_CONTACT_ENDPOINT=https://contact.aboudrar.dev/api/contact`.
Les tokens `PUBLIC_CF_ANALYTICS` (optionnels) peuvent être ajoutés en variables
du workflow si tu veux réactiver Cloudflare Web Analytics.

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
Le CNAME du Worker peut être géré automatiquement par `wrangler deploy` (Custom
Domains) — dans ce cas aucun enregistrement DNS manuel n'est nécessaire pour
`contact`.

## Worker `contact`

```bash
cd workers/contact
npm install
npx wrangler login     # autorise le compte Cloudflare dans le navigateur
npm run dev            # local, utilise .dev.vars
npm run deploy         # déploie sur contact.aboudrar.dev (crée le custom domain)
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

Le token GitHub stocké dans `.git/config` était révoqué/expiré. Le remote a été
nettoyé (URL HTTPS sans token). Pour pousser vers `Younes-Aboudrar/portfolio`,
configure une authentification propre : clé SSH (`git remote set-url origin
git@github.com:Younes-Aboudrar/portfolio.git`) ou GitHub CLI (`gh auth login`).
Le secret `GH_PAGES_DEPLOY_TOKEN` est stocké dans les secrets du repo et utilisé
uniquement par le workflow.