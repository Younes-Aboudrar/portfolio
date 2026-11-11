import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './tests/browser',
	fullyParallel: true,
	workers: 2,
	forbidOnly: !!process.env.CI,
	use: {
		browserName: 'chromium',
		locale: 'en-US',
		trace: 'retain-on-failure',
		launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE }
	},
	webServer: [
		{ command: 'npm run preview -w @aboudrar/portfolio -- --host 127.0.0.1 --port 4273 --strictPort', url: 'http://127.0.0.1:4273' },
		{ command: 'npm run preview -w @aboudrar/blog -- --host 127.0.0.1 --port 4274 --ignore-lock', url: 'http://127.0.0.1:4274' },
		{ command: 'npm run preview -w @aboudrar/wiki -- --host 127.0.0.1 --port 4275 --ignore-lock', url: 'http://127.0.0.1:4275' }
	]
});
