import express from 'express';

import * as gracile from '@gracile/gracile/node';

import { handler } from './dist/server/entrypoint.js';

const app = express();

app.use(express.static(gracile.getClientDistPath(import.meta.url)));

app.use((req, res, next) => {
	res.locals.requestId = crypto.randomUUID();
	res.locals.userEmail = req.get('x-forwarded-email') || null;
	return next();
});

app.use(gracile.nodeAdapter(handler));

const server = app.listen(3030, () => gracile.printAddressInfos({ server }));
