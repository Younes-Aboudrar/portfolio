# Déploiement — aboudrar.dev

Monorepo npm (workspaces) hébergé sur **Cloudflare**. Trois sites sur
Cloudflare Pages + un Worker (formulaire de contact).

| Site | Domaine | App | Framework |
|---|---|---|---|
| Portfolio | `younes.aboudrar.dev` | `apps/portfolio` | SvelteKit (`adapter-cloudflare`) |
| Wiki | `abwiki.aboudrar.dev` | `apps/wiki` | Astro Starlight |
| Blog | `blog.aboudrar.dev` | `apps/blog` | Astro |
| API contact | `contact.aboudrar.dev` | `workers/contact` | Cloudflare Worker |

## Prérequis

- Un compte Cloudflare, la zone DNS `aboudrar.dev` déjà ajoutée (les sous-domaines
  + SSL se configurent automatiquement).
- Un compte [Resend](https://resend.com) pour l'envoi d'emails.
- Node ≥ 20 (le repo a été testé avec Node 26). Définir `NODE_VERSION=26` dans
  les variables d'environnement des projets Pages.

## Construire localement

```bash
npm install
npm run build          # build les 3 apps
npm run check          # svelte-check (portfolio) + astro check (wiki, blog)
```

Sorties de build :

- `apps/portfolio/.svelte-kit/cloudflare` (adapter-cloudflare)
- `apps/wiki/dist`
- `apps/blog/dist`

## Cloudflare Pages — configuration par projet

Pour chaque projet Pages, définir :

- **Root directory** : racine du repo (les workspaces sont npm, `npm ci` doit
  tourner à la racine).
- **Build command** : `npm ci && npm run build --workspace <package>`
- **Build output directory** : voir tableau ci-dessous
- **Environment variables** : `NODE_VERSION = 26`, et les variables indiquées.

| Projet Pages | Domaine | Package | Output |
|---|---|---|---|
| `portfolio` | `younes.aboudrar.dev` | `@aboudrar/portfolio` | `apps/portfolio/.svelte-kit/cloudflare` |
| `abwiki` | `abwiki.aboudrar.dev` | `@aboudrar/wiki` | `apps/wiki/dist` |
| `ablog` | `blog.aboudrar.dev` | `@aboudrar/blog` | `apps/blog/dist` |

### Variables par projet

- **portfolio** : `PUBLIC_CONTACT_ENDPOINT=https://contact.aboudrar.dev/api/contact`,
  `PUBLIC_CF_ANALYTICS=<token Web Analytics>`.
- **abwiki** : `PUBLIC_CF_ANALYTICS=<token Web Analytics>` (optionnel).
- **ablog** : `PUBLIC_CF_ANALYTICS=<token Web Analytics>` (optionnel).

Le token Cloudflare Web Analytics se trouve dans le dashboard Cloudflare →
**Analytics → Web Analytics → Manage**.

## Worker `contact`

```bash
cd workers/contact
npm install
npm run dev          # local, utilise .dev.vars
npm run deploy       # déploie sur contact.aboudrar.dev
```

### Secrets et variables

- `wrangler secret put RESEND_API_KEY` — clé API Resend (créer depuis le
  dashboard Resend → API Keys).
- Variables définies dans `wrangler.toml` :
  - `CONTACT_TO` = `younes@aboudrar.dev`
  - `CONTACT_FROM` = `contact@aboudrar.dev` (domaine à vérifier chez Resend :
    add a DNS `_resend.domainkey.aboudrar.dev` TXT pour valider `aboudrar.dev`)
  - `CONTACT_REPLY_PREFIX` = `contact -`

### API

`POST https://contact.aboudrar.dev/api/contact`

```json
{ "name": "Jean", "email": "jean@example.com", "message": "Bonjour..." }
```

CORS : seule l'origine `https://younes.aboudrar.dev` est autorisée. Les emails
sont envoyés vers `younes@aboudrar.dev` avec `reply_to` = l'email du visiteur.

## DNS

Rien à faire à la main : associer le domaine de chaque projet Pages
(et le route `contact.aboudrar.dev` du Worker) dans le dashboard — Cloudflare
créera automatiquement les enregistrements et le certificat SSL.

## Analytics

Le beacon Cloudflare Web Analytics est injecté :

- portfolio : composant `Analytics.svelte` (`PUBLIC_CF_ANALYTICS`).
- wiki : option `head` de Starlight (`PUBLIC_CF_ANALYTICS`).
- blog : `BaseLayout.astro` (`PUBLIC_CF_ANALYTICS`).

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

## Renommer le dépôt

Le repo est référencé dans les liens d'édition du wiki et les URLs GitHub du
portfolio. Il est prévu de renommer `Younes-Aboudrar/portfolio` →
`Younes-Aboudrar/aboudrar.dev`, puis de mettre à jour :

- `apps/wiki/astro.config.mjs` → `editLink.baseUrl`
- `apps/portfolio/src/lib/contact.ts` → `github`
- les liens dans `apps/blog/src/pages/about.astro`