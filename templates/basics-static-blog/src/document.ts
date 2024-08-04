import { helpers } from '@gracile/gracile/document';
import { html } from '@gracile/gracile/server-html';
import { createMetadata } from '@gracile/metadata';

import { SITE_TITLE } from './constants.js';
import { shellFooter } from './features/shell/footer.js';
import { shellHeader } from './features/shell/header.js';

export const document = (options: { url: URL; title?: string | null }) => html`
	<!doctype html>
	<html lang="en">
		<head>
			<!-- Helpers -->
			${Object.values(helpers.dev)}
			<!--  -->
			${helpers.fullHydration}
			<!--  -->
			${Object.values(helpers.polyfills)}

			<!-- Global assets -->
			<link
				rel="stylesheet"
				href=${new URL('./document.scss', import.meta.url).pathname}
			/>
			<script
				type="module"
				src=${new URL('./document.client.ts', import.meta.url).pathname}
			></script>

			<!-- Page assets -->
			${helpers.pageAssets}

			<!-- SEO and page metadata -->
			${createMetadata({
				siteTitle: SITE_TITLE,
				author: 'Myself',
			})}
		</head>

		<body>
			${shellHeader({
				title:
					typeof options.title === 'undefined' ? SITE_TITLE : options.title,
				currentPath: options.url.pathname,
			})}

			<route-template-outlet></route-template-outlet>

			${shellFooter()}
		</body>
	</html>
`;
