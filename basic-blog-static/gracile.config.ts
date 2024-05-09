import { defineConfig } from '@gracile/gracile';
import { viteMarkdownPlugin } from '@gracile/markdown/vite';
import { MarkdownRenderer } from '@gracile/markdown-preset-marked';
import { viteSitemapPlugin } from '@gracile/sitemap/vite';
import { viteSvgPlugin } from '@gracile/svg/vite';

import { SITE_URL } from './src/constants.js';

export default defineConfig({
	port: 4567,
	// ...

	vite: {
		plugins: [
			viteSvgPlugin(),
			viteSitemapPlugin({ siteUrl: SITE_URL }),
			viteMarkdownPlugin({ MarkdownRenderer }),
		],

		build: { target: 'es2022' },
	},
});
