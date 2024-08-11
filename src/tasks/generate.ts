import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// import { watch } from 'chokidar';
import glob from 'fast-glob';
import { cp, rm } from 'fs/promises';
import latestVersion from 'latest-version';

import type pjsonType from '../../templates-src/basics/package.json';
import { partials } from '../config/partials.js';
import { templates } from '../config/templates.js';
// import { dirname } from 'path';

// const watcher = watch(['templates-src','inventory']);

const linkPackages = false;
const useNext = false;

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
		const rdme = join(process.cwd(), 'templates', template.name, 'README.md');
		await writeFile(rdme, '…'); // NOTE: DUMMY
		const readme = await partials.readme(template);
		await writeFile(rdme, readme);

		if (linkPackages === false) {
			const pjsonDest = join(dest, 'package.json');
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const pjson = JSON.parse(
				await readFile(pjsonDest, 'utf8'),
			) as unknown as typeof pjsonType;
			// Object.fromEntries(Object.entries(pjson.dependencies))
			await Promise.all(
				Object.entries(pjson.dependencies).map(async ([k]) => {
					if (k.startsWith('@gracile/')) {
						const version = await latestVersion(k, {
							version: useNext ? 'next' : 'latest',
						});
						pjson.dependencies[k] = version;
					}
				}),
			);

			await writeFile(pjsonDest, `${JSON.stringify(pjson, null, 2)}\n`);
		}
	}),
);
