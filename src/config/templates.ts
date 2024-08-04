// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck ...
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { partials } from './config/partials.js';

export const templates = {
	'basic-blog-static': {
		'README.md': await partials.readme({
			name: 'basic-blog-static',
			title: 'Basic Blog (static)',
			features: /* md */ `
- ✅ Minimal styling (make it your own!)
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ Markdown support
- ✅ SVG support
- ✅ Server-rendered Lit Elements
`.trim(),
			tryout: 'https://gracile-template-basic-blog-static.netlify.app/',
		}),

		'src/ambient.d.ts': `/// <reference types="@gracile/gracile/ambient" />
/// <reference types="@gracile/svg/ambient" />
/// <reference types="@gracile/markdown/ambient" />
`,

		'.gitignore': { from: '__common/.gitignore' },
		'tsconfig.json': { from: '__common/tsconfig.json' },
		'public/favicon.svg': { from: '__common/public/favicon.svg' },

		'src/tokens.scss': { from: 'standard/src/tokens.scss' },
		'src/document.*': { from: 'standard/src/document.*' },
		'src/features/shell/*': { from: 'standard/src/features/shell/*' },
		'src/assets/gracile-logo.svg': {
			from: 'standard/src/assets/gracile-logo.svg',
		},
		'src/features/tree.ts': { from: 'standard/src/features/tree.ts' },
		'.vscode/*': { from: 'standard/.vscode/*' },

		'src/features/counters/*': { from: 'standard/src/features/counters/*' },
		'src/features/gracile-welcome.*': {
			from: 'standard/src/features/gracile-welcome.*',
		},
		'src/features/cool-canvas.ts': {
			from: 'standard/src/features/cool-canvas.ts',
		},
		'src/routes/(home).*': { from: 'standard/src/routes/(home).*' },
		'src/content/home.md': { from: 'standard/src/content/home.md' },
		'src/common.scss': { from: 'standard/src/common.scss' },
	},

	'minimal-static': {
		'README.md': await partials.readme({
			name: 'minimal-static',
			title: 'Minimal setup (static)',
			features: undefined,
		}),

		'src/ambient.d.ts': `/// <reference types="@gracile/gracile/ambient" />
`,

		'.gitignore': { from: '__common/.gitignore' },
		'tsconfig.json': { from: '__common/tsconfig.json' },
		'public/favicon.svg': { from: '__common/public/favicon.svg' },
	},

	'minimal-server-express': {
		'README.md': await partials.readme({
			name: 'minimal-server-express',
			title: 'Minimal server (express)',
			features: undefined,
		}),

		'src/ambient.d.ts': `/// <reference types="@gracile/gracile/ambient" />
	`,

		'.gitignore': { from: '__common/.gitignore' },
		'tsconfig.json': { from: '__common/tsconfig.json' },
		'public/favicon.svg': { from: '__common/public/favicon.svg' },
	},

	// 	'simple-server': {
	// 		'README.md': await partials.readme({
	// 			name: 'simple-server',
	// 			title: 'Simple server',
	// 			features: undefined,
	// 			description: /* md */ `
	// > "Server" output mode is still **experimental**!
	// > It will only work in **development** mode.
	// `,
	// 		}),

	// 		'src/ambient.d.ts': `/// <reference types="@gracile/gracile/ambient" />
	// /// <reference types="@gracile/svg/ambient" />
	// /// <reference types="@gracile/markdown/ambient" />
	// `,

	// 		'.gitignore': true,
	// 		'tsconfig.json': true,
	// 		'src/tokens.scss': true,
	// 		'src/document.*': true,
	// 		'src/features/shell/*': true,
	// 		'src/assets/gracile-logo.svg': true,
	// 		'src/features/tree.ts': true,
	// 		'.vscode/*': true,
	// 		'public/favicon.svg': true,

	// 		'src/features/counters/*': true,
	// 		'src/features/gracile-welcome.*': true,
	// 		'src/features/cool-canvas.ts': true,
	// 		'src/routes/(home).*': true,
	// 		'src/content/home.md': true,
	// 		'src/common.scss': true,
	// 	},
};
