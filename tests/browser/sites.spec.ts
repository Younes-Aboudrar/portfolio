import { test, expect } from '@playwright/test';

const portfolio = 'http://127.0.0.1:4273';
const blog = 'http://127.0.0.1:4274';
const wiki = 'http://127.0.0.1:4275';

test('portfolio language, metadata and preference persistence agree', async ({ page }) => {
	await page.goto(portfolio);
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', 'en_US');
	await page.getByRole('button', { name: 'Switch language' }).filter({ visible: true }).click();
	await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
	await page.reload();
	await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
	await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', 'fr_FR');
});

test('portfolio remains interactive when browser storage is denied', async ({ page }) => {
	const errors: string[] = [];
	page.on('pageerror', (error) => errors.push(error.message));
	await page.addInitScript(() => {
		Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Blocked', 'SecurityError'); } });
	});
	await page.goto(portfolio);
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	await page.getByRole('button', { name: 'Switch language' }).filter({ visible: true }).click();
	await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
	await page.getByRole('button', { name: 'Switch to dark mode' }).filter({ visible: true }).click();
	await expect(page.locator('html')).toHaveClass(/dark/);
	expect(errors).toEqual([]);
});

test('portfolio mobile menu supports Escape and navigation', async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 812 });
	await page.goto(portfolio);
	const button = page.getByRole('button', { name: 'Menu', exact: true });
	await button.click();
	await expect(button).toHaveAttribute('aria-expanded', 'true');
	await page.keyboard.press('Escape');
	await expect(button).toHaveAttribute('aria-expanded', 'false');
	await button.click();
	await page.locator('#mobile-navigation a[href="/contact"]').click();
	await expect(page).toHaveURL(`${portfolio}/contact`);
	await expect(page.locator('#mobile-navigation')).toHaveCount(0);
});

test('portfolio renders missing-image fallbacks and complete page metadata', async ({ page }) => {
	const errors: string[] = [];
	const missing: string[] = [];
	page.on('pageerror', (error) => errors.push(error.message));
	page.on('response', (response) => { if (response.status() >= 400 && response.url().startsWith(portfolio)) missing.push(response.url()); });
	for (const path of ['/', '/cv', '/now', '/projects', '/projects/maintenance-manager']) {
		await page.goto(portfolio + path);
		await expect(page.locator('html')).toHaveAttribute('lang', 'en');
		await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://younes.aboudrar.dev${path}`);
		await expect(page.locator('meta[name="description"]')).toHaveCount(1);
		await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
	}
	await expect(page.locator('h1')).toHaveCount(1);
	expect(missing).toEqual([]);
	expect(errors).toEqual([]);
});

test('contact form sends bounded fields and announces success or failure', async ({ page }) => {
	let status = 200;
	let payload: Record<string, string> | undefined;
	await page.route('https://contact.aboudrar.dev/api/contact', async (route) => {
		payload = route.request().postDataJSON();
		await route.fulfill({ status, contentType: 'application/json', body: JSON.stringify({ ok: status === 200 }) });
	});
	await page.goto(`${portfolio}/contact`);
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	await expect(page.locator('#contact-name')).toHaveAttribute('maxlength', '100');
	await expect(page.locator('#contact-email')).toHaveAttribute('maxlength', '200');
	await expect(page.locator('#contact-message')).toHaveAttribute('maxlength', '5000');
	for (const code of [200, 429]) {
		status = code;
		await page.locator('#contact-name').fill('Visitor');
		await page.locator('#contact-email').fill('visitor@example.com');
		await page.locator('#contact-message').fill('Browser regression test');
		await page.locator('button[type="submit"]').click();
		await expect(page.locator('[aria-live="polite"] p')).toBeVisible();
		if (code === 200) await expect(page.locator('#contact-message')).toHaveValue('');
		else await expect(page.locator('#contact-message')).toHaveValue('Browser regression test');
	}
	expect(payload).toEqual({ name: 'Visitor', email: 'visitor@example.com', message: 'Browser regression test', website: '' });
});

test('blog search announces empty results and recovers', async ({ page }) => {
	await page.goto(`${blog}/recherche/`);
	const input = page.getByRole('searchbox', { name: 'Rechercher des articles' });
	await input.fill('no-matching-article-xyz');
	await expect(page.getByRole('status')).toBeVisible();
	await expect(page.locator('.search-item:visible')).toHaveCount(0);
	await input.fill('');
	await expect(page.getByRole('status')).toBeHidden();
	await expect(page.locator('.search-item:visible')).toHaveCount(4);
});

test('blog exposes all navigation on mobile and marks English articles', async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 812 });
	await page.goto(blog);
	const navigation = page.getByRole('navigation', { name: 'Navigation mobile' });
	await expect(navigation.getByRole('link')).toHaveCount(6);
	await navigation.getByRole('link', { name: 'Recherche' }).click();
	await expect(page).toHaveURL(`${blog}/recherche/`);
	await page.goto(`${blog}/posts/the-freight-broker-problem-landscape/`);
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('wiki cards follow the theme and edit links point to the source', async ({ page }) => {
	await page.goto(`${wiki}/fr/`);
	await expect(page.locator('h1')).toHaveCount(1);
	const card = page.locator('main .not-prose a[href="/fr/engineering/"]');
	await page.locator('starlight-theme-select select').filter({ visible: true }).selectOption('light');
	await expect(card).toHaveCSS('background-color', 'rgb(255, 255, 255)');
	await page.locator('starlight-theme-select select').filter({ visible: true }).selectOption('dark');
	await expect(card).not.toHaveCSS('background-color', 'rgb(255, 255, 255)');
	await expect(page.locator('a[href*="github.com/Younes-Aboudrar/portfolio/edit/main/"]')).toHaveAttribute('href', 'https://github.com/Younes-Aboudrar/portfolio/edit/main/apps/wiki/src/content/docs/fr/index.mdx');
});
