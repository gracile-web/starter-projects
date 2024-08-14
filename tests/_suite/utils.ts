import { exec } from 'node:child_process';
import { promisify } from 'node:util';

export const $ = promisify(exec);

export const infos = [
	/* templates */
	{ name: 'basics', port: 3030 },

	// { name: 'minimal-static', port: 3030 },
	// { name: 'minimal-server-hono', port: 3030 },
	// { name: 'minimal-server-express', port: 3030 },
];

export async function playwrightSuiteForTemplate(tpl: string, ui = false) {
	const playwrightResultBuild = await $(
		`pnpm playwright test ./tests/${tpl}.spec.ts${ui ? ' --ui' : ''}`, //  --ui
	);
	console.log(playwrightResultBuild.stdout);
	console.log(playwrightResultBuild.stderr);
}
