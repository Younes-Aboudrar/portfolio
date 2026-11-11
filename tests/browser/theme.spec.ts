import { test, expect } from '@playwright/test';

const portfolio = 'http://127.0.0.1:4273';

for (const scheme of ['light', 'dark'] as const) {
  test(`portfolio uses the ${scheme} system theme and preserves a manual override`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: scheme });
    await page.goto(portfolio);
    await expect(page.locator('html')).toHaveCSS('color-scheme', scheme);
    await expect(page.locator('body')).toHaveCSS('background-color', scheme === 'dark' ? 'rgb(9, 19, 37)' : 'rgb(251, 252, 255)');
    const other = scheme === 'dark' ? 'light' : 'dark';
    await page.getByRole('button', { name: `Switch to ${other} mode` }).filter({ visible: true }).click();
    await page.goto(`${portfolio}/contact`);
    await expect(page.locator('html')).toHaveCSS('color-scheme', other);
    await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', other === 'dark' ? '#091325' : '#fbfcff');
    await page.reload();
    await expect(page.locator('html')).toHaveCSS('color-scheme', other);
    await expect(page.getByRole('button', { name: `Switch to ${scheme} mode` }).filter({ visible: true })).toHaveAttribute('aria-pressed', String(other === 'dark'));
  });

  test(`portfolio pages fit a narrow screen in ${scheme} mode and both languages`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 740 });
    await page.emulateMedia({ colorScheme: scheme, reducedMotion: 'reduce' });
    for (const language of ['en', 'fr']) {
      await page.goto(portfolio);
      if (language === 'fr') await page.getByRole('button', { name: 'Switch language' }).filter({ visible: true }).click();
      for (const path of ['/', '/about', '/experience', '/education', '/skills', '/projects', '/projects/academic', '/projects/maintenance-manager', '/contact', '/now']) {
        await page.goto(portfolio + path);
        await expect(page.locator('html')).toHaveAttribute('lang', language);
        await expect(page.locator('html')).toHaveCSS('color-scheme', scheme);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${path} ${language}`).toBe(true);
        await expect(page.locator('h1')).toHaveCount(1);
        if (path === '/') {
          await expect(page.locator('.blueprint-drawing')).toBeVisible();
          expect(await page.locator('.blueprint-drawing').evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
        }
      }
    }
  });
}
