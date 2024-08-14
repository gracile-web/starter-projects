export const templates = [
	{
		merge: ['templates-src/basics'],
		name: 'basics',
		title: 'Basics',
		description:
			'Get up and running with this all around demo of Gracile features.',
		features: /* md */ `
- ✅ Minimal styling (make it your own!)
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ Markdown support
- ✅ SVG support
- ✅ Server-rendered Lit Elements
`.trim(),
		containers: true,
		// tryout: 'https://gracile-template-basic-blog-static.netlify.app/',
	},
	// 	// 	{
	// 	// 		merge: ['./inventory/basics/**'],
	// 	// 		name: 'basics-server',
	// 	// 		title: 'Basics (server)',
	// 	// 		description: 'Get up and running with a full-stack project.',
	// 	// 		features: /* md */ `
	// 	// - ✅ Minimal styling (make it your own!)
	// 	// - ✅ SEO-friendly with canonical URLs and OpenGraph data
	// 	// - ✅ Markdown support
	// 	// - ✅ SVG support
	// 	// - ✅ Server-rendered Lit Elements
	// 	// `.trim(),
	// 	// 		containers: true,
	// 	// 		// tryout: 'https://gracile-template-basic-blog-static.netlify.app/',
	// 	// 	},
	{
		merge: ['inventory/minimal', 'templates-src/minimal-static'],
		name: 'minimal-static',
		title: 'Minimal setup (static)',
		description: 'A statically generated project.',
		containers: true,
	},
	{
		merge: [
			'inventory/minimal',
			'inventory/minimal-server',
			'templates-src/minimal-server-express',
		],
		name: 'minimal-server-express',
		title: 'Minimal server (express)',
		description:
			'A Gracile handler, already set up with Express and static file serving.',
		containers: true,
	},
	{
		merge: [
			'inventory/minimal',
			'inventory/minimal-server',
			'templates-src/minimal-server-hono',
		],
		name: 'minimal-server-hono',
		title: 'Minimal server (hono)',
		description:
			'A Gracile handler, already set up with Hono and static file serving.',
		containers: true,
	},
] as const;
