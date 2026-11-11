import { test, expect } from '@playwright/test';
import { fr } from '../../apps/portfolio/src/lib/i18n/fr';
import { en } from '../../apps/portfolio/src/lib/i18n/en';

const portfolio = 'http://127.0.0.1:4273';

test('skills and learning references agree across languages and cover every project', () => {
	const entries = (dictionary: typeof fr) => [...dictionary.experience.jobs, ...dictionary.experience.activities, ...dictionary.education.items];
	expect(entries(fr).map((entry) => entry.id)).toEqual(entries(en).map((entry) => entry.id));
	expect(new Set(entries(fr).map((entry) => entry.id)).size).toBe(entries(fr).length);
	expect(fr.skills.categories.map(({ id, projectSlugs, journeyIds }) => ({ id, projectSlugs, journeyIds }))).toEqual(en.skills.categories.map(({ id, projectSlugs, journeyIds }) => ({ id, projectSlugs, journeyIds })));
	for (const dictionary of [fr, en]) {
		const projectIds = dictionary.projects.items.map((project) => project.slug);
		const journeyIds = entries(dictionary).map((entry) => entry.id);
		const linkedProjects = dictionary.skills.categories.flatMap((category) => category.projectSlugs);
		expect([...new Set(linkedProjects)].sort()).toEqual(projectIds.toSorted());
		for (const category of dictionary.skills.categories) {
			expect(category.items.length).toBeGreaterThan(0);
			expect(new Set(category.items).size).toBe(category.items.length);
			for (const id of category.journeyIds ?? []) expect(journeyIds).toContain(id);
		}
	}
});

test('experience and education cards open their own journal and keep wiki links independent', async ({ page }) => {
	await page.route('https://blog.aboudrar.dev/**', (route) => route.fulfill({ contentType: 'text/html', body: '<h1>Blog paused</h1>' }));
	await page.route('https://abwiki.aboudrar.dev/**', (route) => route.fulfill({ contentType: 'text/html', body: '<h1>Wiki paused</h1>' }));
	for (const [path, ids] of [['experience', ['ocp', 'codealpha', 'aeroensem']], ['education', ['ensem-nancy', 'ensem-casablanca', 'cpge-reda-slaoui']]] as const) {
		for (const id of ids) {
			await page.goto(`${portfolio}/${path}`);
			await expect(page.locator('html')).toHaveAttribute('lang', 'en');
			const card = page.locator(`article#${id}`);
			await expect(card.getByRole('link', { name: /Experience journal/ })).toContainText('paused');
			await expect(card.getByRole('link', { name: /Notes and learning/ })).toHaveAttribute('href', `https://abwiki.aboudrar.dev/en/journey/${id}/`);
			await card.locator('h2 a, h3 a').click();
			await expect(page).toHaveURL(`https://blog.aboudrar.dev/tags/${id}/`);
		}
	}
	await page.goto(`${portfolio}/experience`);
	await page.locator('#ocp').getByRole('link', { name: /Notes and learning/ }).click();
	await expect(page).toHaveURL('https://abwiki.aboudrar.dev/en/journey/ocp/');
	await page.goto(`${portfolio}/education`);
	await page.getByRole('button', { name: 'Switch language' }).filter({ visible: true }).click();
	await expect(page.locator('#ensem-nancy').getByRole('link', { name: /Notes et apprentissages/ })).toHaveAttribute('href', 'https://abwiki.aboudrar.dev/fr/parcours/ensem-nancy/');
});

test('skills search and domain filtering work on mobile and recover from no results', async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 812 });
	await page.goto(`${portfolio}/skills`);
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	const cards = page.locator('#skills article');
	await expect(cards).toHaveCount(en.skills.categories.length);
	expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
	await page.getByLabel('Domain', { exact: true }).selectOption('languages');
	await expect(cards).toHaveCount(1);
	for (const language of ['Arabic', 'French', 'English', 'Amazigh']) {
		await expect(cards.getByText(language, { exact: true })).toBeVisible();
	}
	await page.getByLabel('Domain', { exact: true }).selectOption('all');
	await page.getByRole('searchbox', { name: 'Search skills' }).fill('tensorflow');
	await expect(cards).toHaveCount(1);
	await expect(cards.getByText('TensorFlow', { exact: true })).toBeVisible();
	await page.getByLabel('Domain', { exact: true }).selectOption('networks');
	await expect(page.getByText('No skills match this search.')).toBeVisible();
	await expect(page.getByRole('status')).toContainText('0 skills shown');
	await page.getByRole('button', { name: 'Clear filters' }).click();
	await expect(cards).toHaveCount(en.skills.categories.length);
	await page.getByLabel('Domain', { exact: true }).selectOption('backend');
	await cards.locator('summary').click();
	await cards.getByRole('link', { name: /Maintenance Manager/ }).click();
	await expect(page).toHaveURL(`${portfolio}/projects/maintenance-manager`);
	await page.goto(`${portfolio}/skills`);
	await page.getByRole('button', { name: 'Switch language' }).filter({ visible: true }).click();
	await page.getByRole('searchbox', { name: 'Rechercher une compétence' }).fill('RESEAUX ET DIAGNOSTIC');
	await expect(cards).toHaveCount(1);
	await expect(cards.getByRole('heading')).toHaveText('Réseaux et diagnostic');
	expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('contact exposes both messaging links using the published number', async ({ page }) => {
	await page.goto(`${portfolio}/contact`);
	await expect(page.getByRole('link', { name: 'Telegram', exact: true })).toHaveAttribute('href', 'https://t.me/+33752902427');
	await expect(page.getByRole('link', { name: 'WhatsApp Business', exact: true })).toHaveAttribute('href', 'https://wa.me/33752902427');
	await expect(page.locator('#contact-message')).toBeVisible();
});
