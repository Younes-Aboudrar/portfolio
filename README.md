# aboudrar.dev

npm workspace: SvelteKit portfolio, Astro blog, Starlight wiki and a Cloudflare contact Worker.

## Development

Use Node 26 (`nvm use`), then `npm ci --ignore-scripts`. The minimum supported Node version is 22.23.4. Use the existing checkout; cloud tasks are isolated and do not need a separate worktree.

Run the apps in separate terminals:

| Command | App | Default port |
| --- | --- | --- |
| `npm run dev` | Portfolio | 5173 |
| `npm run dev:blog` | Blog | 4321 |
| `npm run dev:wiki` | Wiki | 4322 |
| `npm run dev:contact` | Contact Worker, development profile | 8787 |

For local contact integration, set `PUBLIC_CONTACT_ENDPOINT=http://localhost:8787/api/contact` in `apps/portfolio/.env`. The development Worker permits the two local portfolio origins; production permits only `https://younes.aboudrar.dev`. Use `.dev.vars.development` for local secrets and never commit it. Without a Resend key, sending fails safely; unit and browser tests mock email delivery.

In a cloud sandbox, use `npm ci --ignore-scripts --cache /tmp/portfolio-npm-cache` and prefix Astro commands with `XDG_CONFIG_HOME=/tmp/portfolio-config` if the home directory is read-only.

## Validation

- `npm test`: contact API regression tests.
- `npm run check`: Svelte and Astro diagnostics.
- `npm run build`: all three production builds.
- `npm run test:browser`: Chromium regression checks against production output (run build first). Install the browser with `npx playwright install chromium`, or set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to an installed Chromium binary.
- `npm audit`: known dependency advisories.
- `npm run preview`: preview the portfolio production build.

Content lives in the portfolio's `src/lib/i18n` and `src/lib/projects`, the blog's `src/content/posts`, and the wiki's `src/content/docs`. Blog frontmatter accepts `lang: fr` or `en`; tags use lowercase ASCII words separated by hyphens. Missing portfolio photos render the existing fallback art without requesting nonexistent files.

Deployment instructions are in [docs/DEPLOY.md](docs/DEPLOY.md). Blog and wiki remain deliberately paused according to `site-status.json`. GitHub Pages publishing and contact Worker publishing are separate operations. No license grant is implied by this repository; a license should be selected by its owner if public reuse is intended.
