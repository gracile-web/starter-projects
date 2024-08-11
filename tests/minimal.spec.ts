import { test, expect } from '@playwright/test';

test('minimal-static screenshots', async ({ page }) => {
	await page.goto('http://localhost:3030');
	expect(await page.getByRole('code').all()).toHaveLength(4);

	await expect(page).toHaveTitle('Gracile - Home');
	await expect(page).toHaveScreenshot({
		mask: await page.getByRole('code').all(),
		fullPage: true,
	});

	await page.goto('http://localhost:3030/about/');
	await expect(page).toHaveTitle('Gracile - About');
	await expect(page).toHaveScreenshot({ fullPage: true });

	await page.goto('http://localhost:3030/NOT_FOUND/');
	await expect(page).toHaveTitle('Gracile - 404');
	await expect(page).toHaveScreenshot({ fullPage: true });
});

test('routing works', async ({ page }) => {
	await page.goto('http://localhost:3030');

	await page.getByText('About page').click();
});
