import { gracile } from '@gracile/gracile/plugin';
import { viteMarkdownPlugin } from '@gracile/markdown/vite';
import { MarkdownRenderer } from '@gracile/markdown-preset-marked';
import { viteSvgPlugin } from '@gracile/svg/vite';
import { defineConfig } from 'vite';

import { SITE_URL } from './src/constants.js';

export default defineConfig({
	server: {
		port: 3030,
	},

	plugins: [
		gracile({ output: 'server' }),
		viteSvgPlugin(),
		viteMarkdownPlugin({ MarkdownRenderer }),
	],

	build: { target: 'esnext' },
});
