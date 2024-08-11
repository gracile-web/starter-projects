import { test, expect } from '@playwright/test';

const scOptions = { fullPage: true };

test('minimal-static screenshots', async ({ page }) => {
	await page.goto('http://localhost:3030');

	await expect(page).toHaveScreenshot(scOptions);

	await page.goto('http://localhost:3030/form/regular/');
	await expect(page).toHaveScreenshot(scOptions);

	await page.goto('http://localhost:3030/form/with-js/');
	await expect(page).toHaveScreenshot(scOptions);

	await page.goto('http://localhost:3030/json/');
	await expect(page).toHaveScreenshot(scOptions);

	await page.goto('http://localhost:3030/markdown-editor/');

	await expect(page).toHaveScreenshot({
		...scOptions,
		maxDiffPixelRatio: 0.01,
	});

	await page.goto('http://localhost:3030/about/');
	await expect(page).toHaveScreenshot(scOptions);

	await page.goto('http://localhost:3030/NOT_FOUND/');
	await expect(page).toHaveScreenshot(scOptions);
	await expect(page).toHaveTitle('Gracile - 404');
});

test('routing works', async ({ page }) => {
	await page.goto('http://localhost:3030');
	await expect(page).toHaveTitle('Gracile Simple Server');

	await page.locator('nav').getByText(/Form$/).click();
	await expect(page).toHaveTitle('Gracile - Form');

	await page.locator('nav').getByText('Form (+JS)').click();
	await expect(page).toHaveTitle('Gracile - Forms with JS');

	await page.locator('nav').getByText('JSON endpoint').click();
	await expect(page).toHaveTitle('Gracile - JSON endpoint with routing');

	await page.locator('nav').getByText('Markdown editor').click();
	await expect(page).toHaveTitle('Gracile - Markdown editor');

	await page
		.locator('nav')
		.getByText(/About$/)
		.click();
	await expect(page).toHaveTitle('Gracile - About');
});
