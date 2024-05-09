/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck ...

import { copyFile, mkdir, glob, writeFile } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import { styleText as s } from 'node:util';

import { templates } from '../__templates.js';

console.log(s(['blue', 'bold'], `\nGenerating template specific content…\n`));

const templateFolders: string[] = [];
for await (const entry of glob('*', { cwd: '.' })) {
	if (entry in templates) templateFolders.push(entry);
}

console.log(s(['green'], ` - ${templateFolders.join('\n - ')}`));

const fileWrites = templateFolders
	.map((name) =>
		Object.entries(templates[name]).map(async ([fileName, content]) => {
			console.log({ fileName, content });
			if (typeof content === 'boolean') {
				if (content === true) {
					const toCopy: string[] = [];

					for await (const entry of glob(fileName, { cwd: '__inventory' }))
						toCopy.push(entry);

					console.log({ fileName, toCopy });

					return Promise.all(
						toCopy.map(async (entry) => {
							const dest = join(name, entry);
							await mkdir(dirname(dest), { recursive: true });
							await copyFile(join('__inventory', entry), dest);
						}),
					);
				}
				console.log({ fileName });
				return null;
			}

			return writeFile(join(name, fileName), content);
		}),
	)
	.flat();

await Promise.all(fileWrites);
