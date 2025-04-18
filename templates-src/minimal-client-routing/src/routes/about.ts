import { defineRoute } from '@gracile/gracile/route';
import { html } from 'lit';

import { document } from '../document.js';
import { topMenu } from '../features/top-menu.js';

export default defineRoute({
	document: (context) => document({ ...context, title: 'Gracile - About' }),

	template: () => html`
		${topMenu()}

		<h1>About</h1>

		<article>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum enim ex
			iste! Porro quibusdam dolorem incidunt, quis inventore tempore earum
			voluptatibus ab, labore dignissimos rerum numquam tempora excepturi
			reprehenderit cupiditate.
		</article>
	`,
});
