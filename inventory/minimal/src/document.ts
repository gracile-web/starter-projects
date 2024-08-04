import { helpers } from '@gracile/gracile/document';
import { html } from '@gracile/gracile/server-html';

export const document = (options: { url: URL; title?: string | null }) => html`
	<!doctype html>
	<html lang="en">
		<head>
			<!-- Basics -->
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			<!-- Helpers -->
			${Object.values(helpers.dev)}
			<!--  -->
			${helpers.fullHydration}
			<!--  -->
			${Object.values(helpers.polyfills)}

			<!-- Global assets -->
			<link
				rel="stylesheet"
				href=${new URL('./document.css', import.meta.url).pathname}
			/>
			<script
				type="module"
				src=${new URL('./document.client.ts', import.meta.url).pathname}
			></script>

			<!-- Page assets -->
			${helpers.pageAssets}

			<!-- SEO and page metadata -->
			<title>${options.title}</title>
			<link type="image/svg+xml" href="/favicon.svg" rel="icon" />
		</head>

		<body>
			<route-template-outlet></route-template-outlet>
		</body>
	</html>
`;
