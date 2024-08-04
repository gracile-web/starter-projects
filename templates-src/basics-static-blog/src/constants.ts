import type { TreeLevel } from './features/tree.js';

export const SITE_TITLE = 'Gracile Kitchen Sink';

export const DEV_URL = 'http://localhost:4567/';
export const SITE_URL = 'https://example.com/';

export const MENU = [
	{ path: '/', text: 'Home' },

	{ path: '/blog/', text: 'Blog' },

	{ path: '/about/', text: 'About' },
] satisfies TreeLevel[];
