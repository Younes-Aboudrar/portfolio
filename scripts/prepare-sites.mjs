import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const status = JSON.parse(await readFile(new URL('apps/portfolio/src/lib/site-status.json', root), 'utf8'));
const outputs = [];

for (const [site, title] of [['wiki', 'Wiki'], ['blog', 'Blog']]) {
	if (typeof status[site] !== 'boolean') throw new Error(`Missing availability setting for ${site}`);
	const enabled = status[site];
	const directory = enabled ? `apps/${site}/dist` : `build/paused/${site}`;
	outputs.push(`${site}_enabled=${enabled}`, `${site}_dir=${directory}`);
	if (enabled) continue;

	const destination = new URL(`${directory}/`, root);
	await mkdir(destination, { recursive: true });
	const html = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>${title} — temporairement en pause | Younes Aboudrar</title>
  <style>
    :root { color-scheme: light dark; font-family: system-ui, sans-serif; }
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f8fafc; color: #0f172a; }
    main { max-width: 34rem; padding: 2rem; }
    .brand, a { color: #047857; }
    .brand { font-weight: 700; }
    h1 { font-size: clamp(1.8rem, 6vw, 2.5rem); line-height: 1.2; }
    p { line-height: 1.7; }
    a { display: inline-block; margin-top: 1rem; text-underline-offset: .2em; }
    @media (prefers-color-scheme: dark) {
      body { background: #09090b; color: #f4f4f5; }
      .brand, a { color: #34d399; }
    }
  </style>
</head>
<body>
  <main>
    <p class="brand">Younes Aboudrar · ${title}</p>
    <h1>Site temporairement en pause</h1>
    <p>Ce site est temporairement indisponible. Retrouvez mon parcours et mes projets sur mon portfolio.</p>
    <p lang="en">This site is temporarily paused. You can find my background and projects on my portfolio.</p>
    <a href="https://younes.aboudrar.dev">Accéder au portfolio / Visit my portfolio</a>
  </main>
</body>
</html>
`;
	await Promise.all([
		writeFile(new URL('index.html', destination), html),
		writeFile(new URL('404.html', destination), html),
		writeFile(new URL('robots.txt', destination), 'User-agent: *\nDisallow: /\n')
	]);
	console.log(`${title}: paused page prepared in ${fileURLToPath(destination)}`);
}

if (process.env.GITHUB_OUTPUT) {
	await appendFile(process.env.GITHUB_OUTPUT, outputs.join('\n') + '\n');
}
