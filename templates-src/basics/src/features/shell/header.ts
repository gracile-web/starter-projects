import { html } from 'lit';

import logo from '../../assets/gracile-logo.svg';
import { shellMenu } from './menu.js';

export const shellHeader = (options: {
	title: string | null;
	currentPath: string;
}) => html`
	<header class="shell-header">
		<div class="menu">
			<a href="/" class="logo">${logo}</a>

			${shellMenu({ currentPath: options.currentPath })}
		</div>

		${options.title ? html`<h1>${options.title}</h1>` : null}
	</header>
`;
