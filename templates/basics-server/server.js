import express from 'express';

import * as gracile from '@gracile/gracile/node';

import { handler } from './dist/server/entrypoint.js';

const app = express();

app.use(express.static(gracile.getClientDistPath(import.meta.url)));

app.use(gracile.nodeAdapter(handler));

const server = app.listen(3030, () =>
	gracile.printAddressInfos(server.address()),
);
