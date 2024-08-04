import '../features/counters/my-lit-counter.js';

import { defineRoute } from '@gracile/gracile/route';
import { html } from 'lit';

import aboutText from '../content/about.md' with { type: 'md-lit' };
import { document } from '../document.js';

export default defineRoute({
	document: (context) => document({ ...context, title: 'About' }),

	template: () => html`
		<!--  -->
		<main class="prose">${aboutText.body.lit}</main>
	`,
});
