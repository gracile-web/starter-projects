import { cp, rm } from 'fs/promises';
// import { watch } from 'chokidar';
import glob from 'fast-glob';
import { join } from 'node:path';
// import { dirname } from 'path';

// const watcher = watch(['templates-src','inventory']);

const templates = [
	{
		merge: ['./inventory/basics/**'],
		name: 'basics-static-blog',
	},
	{
		merge: ['./inventory/basics/**'],
		name: 'basics-server',
	},
	{
		merge: ['./inventory/minimal/**'],
		name: 'minimal-static',
	},
	{
		merge: ['./inventory/minimal/**'],
		name: 'minimal-server-express',
	},
	{
		merge: ['./inventory/minimal/**'],
		name: 'minimal-server-hono',
	},
];

// await glob('')

await Promise.all(
	templates.map(async (template) => {
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
		console.log(toCopy);

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

		// await cp(`./templates-src/${template.name}`, dest, {
		// 	recursive: true,
		// 	errorOnExist: false,
		// 	force: true,
		// });
		console.log({ name: template.name });
	}),
);
