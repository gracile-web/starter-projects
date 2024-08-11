import { test, expect } from '@playwright/test';

test('api route', async ({ page }) => {
	await page.goto('http://localhost:3030/api/');

	expect(await page.textContent('body')).toBe(
		'A GET! http://localhost:3030/api/',
	);

	await page.goto('http://localhost:3030/api/sub-route/');
	expect(await page.textContent('body')).toBe(
		'A GET! http://localhost:3030/api/sub-route/',
	);
});
