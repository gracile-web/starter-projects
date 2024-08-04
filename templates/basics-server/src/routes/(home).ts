import '../features/counters/my-lit-counter.js';

import { defineRoute } from '@gracile/gracile/route';
import { html } from 'lit';

import homeText from '../content/home.md' with { type: 'md-lit' };
import { document } from '../document.js';
import { gracileWelcome } from '../features/gracile-welcome.js';

export default defineRoute({
	document: (context) => document({ ...context, title: null }),

	template: () => html`
		<main>
			<!--  -->
			${gracileWelcome}

			<section class="custom-elements-demo" id="custom-elements">
				<h2>Rock the counters!</h2>

				<my-lit-counter>
					<!--  -->
					<strong>Lit</strong> Element (hydrated)
				</my-lit-counter>

				<my-vanilla-counter>
					<!--  -->
					<strong>Vanilla</strong> Element
				</my-vanilla-counter>
			</section>

			<section class="markdown-demo">
				<header>
					<blockquote>
						👉 Edit the <strong>Markdown</strong> file below in
						<code>src/content/home.md</code>
					</blockquote>
				</header>

				<article class="prose">${homeText.body.lit}</article>

				<footer>
					<p>
						Published on:
						<strong
							>${new Date(
								homeText.meta.frontmatter.publication_date as string,
							).toDateString()}</strong
						>
						by <strong>${homeText.meta.frontmatter.author}</strong>.
					</p>
				</footer>
			</section>
		</main>
	`,
});
