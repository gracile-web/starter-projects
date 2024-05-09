import { html } from 'lit';

export const mainCard = html`
	<h2>
		Get started with your <em><strong>Basic Blog</strong> (static)</em>
	</h2>

	<ol>
		<li>
			<p>
				Start tweaking the home route 👉

				<code>src/routes/(home).ts</code>, and see what happens!
			</p>
		</li>
		<li>
			<p>
				Head over to
				<code>src/content</code>
				to edit the
				<a href="/blog/">blog</a>
				content.
			</p>
		</li>
		<li>
			<p>
				Play with the
				<a href="#custom-elements">HTML Custom Elements</a>
				in <code>src/features/counters</code>, get a taste of interactivity ✨.
			</p>
		</li>
	</ol>
`;
