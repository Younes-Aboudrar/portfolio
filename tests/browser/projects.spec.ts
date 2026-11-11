import { test, expect } from '@playwright/test';
import { projectsFr } from '../../apps/portfolio/src/lib/projects/fr';
import { projectsEn } from '../../apps/portfolio/src/lib/projects/en';

test('translated projects retain unique identities and every detail URL is published', async ({ request }) => {
	const identities = (projects: typeof projectsFr) => projects.map(({ slug, category, kind, image, links }) => ({ slug, category, kind, image, links }));
	expect(new Set(projectsFr.map((project) => project.slug)).size).toBe(projectsFr.length);
	expect(identities(projectsEn)).toEqual(identities(projectsFr));
	for (const { slug, title } of projectsFr) {
		const response = await request.get(`http://127.0.0.1:4273/projects/${slug}`);
		expect(response.status(), slug).toBe(200);
		const html = await response.text();
		expect(html).toContain(`https://younes.aboudrar.dev/projects/${slug}`);
		expect(html).toContain(title.replaceAll('&', '&amp;').replaceAll('<', '&lt;'));
	}
});
