import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';

import * as gracile from '@gracile/gracile/hono';

import { handler } from './dist/server/entrypoint.js';

/** @type {Hono<{ Variables: Gracile.Locals }>} */
const app = new Hono();

app.get('*', serveStatic({ root: gracile.getClientDistPath(import.meta.url) }));

app.use((c, next) => {
	c.set('requestId', crypto.randomUUID());
	c.set('userEmail', c.req.header('x-forwarded-email') || 'null@0.home.arpa');

	return next();
});

app.use(gracile.honoAdapter(handler));

export const server = serve(
	{
		fetch: app.fetch,
		port: process.env.PORT ? Number(process.env.PORT) : 3030,
		hostname: gracile.server.LOCALHOST,
	},
	(address) => {
		gracile.printUrls(address);

		process.env.ADDRESS = `http://${gracile.server.LOCALHOST}:${address.port}`;
	},
);