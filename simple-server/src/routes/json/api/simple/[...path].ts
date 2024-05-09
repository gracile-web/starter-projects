import { defineRoute } from '@gracile/gracile/route';
// NOTE: Usually defined as a global in the browser.
import { URLPattern } from '@gracile/gracile/url-pattern';

import { DEV_URL } from '../../../../constants.js';

const API_BASE = '/json/api/simple';

const petDb = [
	{ id: 1, name: 'Rantanplan', type: 'dog' },
	{ id: 1, name: 'Felix', type: 'cat' },
];

const petStorePattern = new URLPattern(`${API_BASE}/pet/:id/`, DEV_URL);

export default defineRoute({
	handler: (context) => {
		if (context.request.method !== 'GET')
			return Response.json(
				{ success: false },
				{ status: 405, statusText: `Only "GET" is allowed.` },
			);

		const result = petStorePattern.exec(context.url);

		const id = result?.pathname.groups?.id;

		if (!Number.isNaN(id)) {
			const foundPet = petDb.find((pet) => pet.id === Number(id));

			if (foundPet) return Response.json({ success: true, data: foundPet });

			return Response.json(
				{ success: false },
				{ status: 404, statusText: `Pet "${id}" not found!` },
			);
		}

		return Response.json(
			{ success: false },
			{
				status: 400,
				statusText: `Unknown API route for "${context.url.href}"`,
			},
		);
	},
});
