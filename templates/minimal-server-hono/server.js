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
	c.set('userEmail', 'admin@admin.home.arpa');

	return next();
});

app.use(gracile.honoAdapter(handler));

serve({ fetch: app.fetch, port: 3030, hostname: 'localhost' }, (address) =>
	gracile.printAddressInfos(address),
);
