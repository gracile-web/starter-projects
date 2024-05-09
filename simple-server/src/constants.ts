import type { TreeLevel } from './features/tree.js';

export const SITE_TITLE = 'Gracile Simple Server';

export const DEV_URL = 'http://localhost:4567/';
export const SITE_URL = 'https://example.com/';

export const MENU = [
	{ path: '/', text: 'Home' },

	{ path: '/form/regular/', text: 'Form' },
	{ path: '/form/with-js/', text: 'Form (+JS)' },
	{ path: '/json/', text: 'JSON endpoint' },
	{ path: '/markdown-editor/', text: 'Markdown editor' },
] satisfies TreeLevel[];
