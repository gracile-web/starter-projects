// NOTE: This works, we use this because the playwright one is not what want.
import { after, before } from 'node:test';

import { expect, test } from '@playwright/test';
import type { ViteDevServer } from 'vite';

import { createViteTestServer } from './_suite/utils.js';

let server: ViteDevServer;

before(async () => {
	server = await createViteTestServer(import.meta.url);
});

test('minimal-client-routing navigation and screenshots', async ({ page }) => {
	await page.goto('http://localhost:3030');

	await expect(page).toHaveTitle('Gracile - Home');
	await expect(page).toHaveScreenshot({
		mask: [page.getByText(/http:\/\//), page.getByText(/Hello (.*?)!/)],
		maskColor: 'darkslategray',
	});

	await page.getByText(/^About/).click();
	await expect(page).toHaveTitle('Gracile - About');
	await expect(page).toHaveScreenshot();

	// TODO: Tests for responses (doc, props…)

	await page.getByText('A Story about Bytes').click();

	await expect(page).toHaveTitle('Gracile - A Story about Bytes');
	await expect(page).toHaveScreenshot();

	await page.getByText('A Story about Bird').click();

	await expect(page).toHaveTitle('Gracile - A Story about Bird');
	await expect(page).toHaveScreenshot();

	// await page.goto('http://localhost:3030/about/');
});

// test('minimal-bootstrap-tailwind minification is working', async ({ page }) => {
// 	await page.goto('http://localhost:3030');
// 	// expect(await page.locator('my-big-content header').innerHTML()).toBe(
// 	// 	`<h1>Comprehensive Guide to Minification of Web Assets</h1><p>Explore the intricacies of minifying JavaScript, HTML, and CSS to enhance the performance and efficiency of your web applications.</p><!--lit-part kjKvj4vgGbU=--><nav><ul><li><a href="#introduction">Introduction</a></li><li><a href="#what-is-minification">What is Minification?</a></li><li><a href="#minifying-javascript">Minifying JavaScript</a></li><li><a href="#minifying-html">Minifying HTML</a></li><li><a href="#minifying-css">Minifying CSS</a></li><li><a href="#tools-for-minification">Tools for Minification</a></li><li><a href="#drawbacks">Potential Drawbacks of Minification</a></li><li><a href="#conclusion">Conclusion</a></li></ul></nav><!--/lit-part-->`,
// 	// );
// });

// test('routing works', async ({ page }) => {
// 	await page.goto('http://localhost:3030');

// });

after(() => server.close());
