import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// import { watch } from 'chokidar';
import glob from 'fast-glob';
import { cp, rm } from 'fs/promises';

import { partials } from '../config/partials.js';
// import { dirname } from 'path';

// const watcher = watch(['templates-src','inventory']);

const templates = [
	{
		merge: ['./inventory/basics/**'],
		name: 'basics-static-blog',
		title: 'Basics Blog (static)',
		features: /* md */ `
- ✅ Minimal styling (make it your own!)
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ Markdown support
- ✅ SVG support
- ✅ Server-rendered Lit Elements
`.trim(),
		tryout: 'https://gracile-template-basic-blog-static.netlify.app/',
	},
	{
		merge: ['./inventory/basics/**'],
		name: 'basics-server',
		title: 'Basics (server)',
		features: /* md */ `
- ✅ Minimal styling (make it your own!)
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ Markdown support
- ✅ SVG support
- ✅ Server-rendered Lit Elements
`.trim(),
		tryout: 'https://gracile-template-basic-blog-static.netlify.app/',
	},
	{
		merge: ['./inventory/minimal/**'],
		name: 'minimal-static',
		title: 'Minimal setup (static)',
		features: undefined,
	},
	{
		merge: ['./inventory/minimal/**'],
		name: 'minimal-server-express',
		title: 'Minimal server (express)',
		features: undefined,
	},
	{
		merge: ['./inventory/minimal/**'],
		name: 'minimal-server-hono',
		title: 'Minimal server (hono)',
		features: undefined,
	},
];

// await glob('')

await Promise.all(
	templates.map(async (template) => {
		const readme = await partials.readme(template);

		await rm(`./templates/${template.name}`, { recursive: true }).catch(
			() => null,
		);

		const toCopy = await glob(
			[
				...template.merge,
				'./inventory/__common/**',
				`./templates-src/${template.name}/**`,
				// '**/*',
			],
			{ dot: true },
		);

		const dest = `templates/${template.name}`;
		await Promise.all(
			toCopy.map(async (file) => {
				// console.log([mergeWith]);
				// console.log(file.split('/').slice(3).join('/'));
				await cp(file, join(dest, file.split('/').slice(3).join('/')), {
					recursive: true,
					errorOnExist: false,
					force: true,
				});
			}),
		);

		await writeFile(
			join(process.cwd(), 'templates', template.name, 'README.md'),
			readme,
		);
	}),
);
