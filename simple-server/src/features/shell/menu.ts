import { html } from 'lit';

import { MENU } from '../../constants.js';
import { tree } from '../tree.js';

export const shellMenu = (options: { currentPath: string }) => html`
	<nav class="shell-menu">
		<!--  -->

		${tree({ tree: MENU, currentPath: options.currentPath })}
	</nav>
`;
