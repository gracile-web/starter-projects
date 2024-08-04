import { html } from 'lit';

import logo from '../../assets/gracile-logo.svg' with { type: 'svg-lit' };
import { shellMenu } from './menu.js';

export const shellHeader = (options: {
	title: string | null;
	currentPath: string;
}) => html`
	<header class="shell-header">
		<a href="/" class="logo">${logo}</a>

		${options.title ? html`<h1>${options.title}</h1>` : null}
		${shellMenu({ currentPath: options.currentPath })}
	</header>
`;
