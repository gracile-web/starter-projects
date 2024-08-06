// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck ...
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { exec, md } from '../utils.js';

const filesEmojis = {
	scss: '🟪',
	css: '🔷',
	js: '🟨',
	ts: '🟦',
	json: '🟠',
	svg: '🔶',
	md: '⬛️',
	'/': '📂',
};

export const partials = {
	readme: async (opt: {
		name: string;
		title: string;
		features?: string | undefined;
		description?: string | undefined;
		tryout?: string | undefined;
	}) => /* md */ `# Gracile Starter Project: ${opt.title}
${opt.description ? `${opt.description}` : ''}
\`\`\`sh
npm create gracile@latest -t ${opt.name}
\`\`\`
${
	opt.tryout
		? `
---

<div align="center">

[🕹️ Try it online](${opt.tryout})

</div>

---
`
		: ''
}
> 🧚 **Already a Gracile pro?** Delete this file. Have fun!
${
	opt.features
		? `
Features:

${opt.features}
`
		: ''
}
## 🏗️ Project Structure

\`\`\`text
${(
	await exec(
		`tree -F -I 'node_modules|dist|*-lock.yaml' templates/${opt.name}/`,
	)
).stdout
	.split('\n')
	.slice(1, -3)
	.join('\n')
	//
	.replaceAll(/─ (.*)\.(.*)/g, (_, s, s2) => ` ${filesEmojis[s2]} ${s}.${s2}`)
	.replaceAll(/─ (.*)\//g, (_, s) => ` ${filesEmojis['/']} ${s}/`)}
\`\`\`

## 🪄 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| \`npm install\`             | Installs dependencies                            |
| \`npm run dev\`             | Starts local dev server at \`localhost:4567\`      |
| \`npm run build\`           | Build your production site to \`./dist/\`          |
| \`npm run preview\`         | Preview your build locally, before deploying     |

## 🧠 Want to learn more?

Check out the [Gracile documentation](https://gracile.js.org) or jump into the [Discord server](https://gracile.js.org/chat/).
`,
};
