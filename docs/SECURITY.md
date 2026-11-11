# Security maintenance

## Contact endpoint

The contact Worker bounds the request body to 32 KiB, validates JSON object and
field shapes, checks the honeypot on the server, and limits submissions through
Cloudflare bindings. The limits are five attempts per IP per minute and twenty
attempts per minute across the endpoint in each Cloudflare location. They are
approximate, not a global Resend quota or proof that a visitor is human. See
DEPLOY.md for configuration and deployment steps. Missing or failing bindings
fail closed with 503; denied requests receive 429. Email requests time out after
ten seconds. Tests use mocked outbound requests and never send real emails.

## Dependency review — 2026-11-11

Updated vulnerable dependencies, including Astro 7.4.10 and Wrangler 4.160.0.
Migrated the portfolio to SvelteKit 3.2, adapter-static 4, Vite 8 and TypeScript 6
to remove the remaining SvelteKit/cookie advisories. This includes explicit public
build-time environment variables and the new Vite configuration and import paths.
Lifecycle scripts are disabled during installation; checks, production builds,
Worker tests and Chromium regression tests run before Pages publishing.

The registry audit reports zero critical, high or moderate findings and four low
findings. These four affected-package entries share the **deepmerge** advisory
GHSA-gcqx-w48m-w2h4 through the Svelte build-tool chain. Its configuration is
repository-controlled, not supplied by website visitors. No compatible patched
release is currently offered by the audit. Do not use `npm audit fix --force`
or downgrade to obsolete framework versions to silence the report.

Review this dependency again by **2026-12-11**, or before accepting untrusted build
configuration. Re-run `npm audit` before each release because advisories and
available fixes change. The CI audit blocks high/critical findings; low findings
remain visible and require review rather than being hidden with an audit ignore.
