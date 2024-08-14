#!/bin/zsh

node --experimental-strip-types --test --test-concurrency=1,1 tests/_suite/all*.test.ts

# node --experimental-strip-types --watch --test tests/_suite/all.test.ts
# pnpm --prefix templates -r i

# cd templates/minimal-static && node --run build && cd ../..
# cd templates/minimal-server-express && node --run build && cd ../..
# cd templates/minimal-server-hono && node --run build && cd ../..
# cd templates/basics-server && node --run build && cd ../..
# cd templates/basics-static-blog && node --run build && cd ../..

# # pnpm playwright test tests/minimal-static.spec.ts
# pnpm playwright test tests/minimal-server-express.spec.ts
# pnpm playwright test tests/minimal-server-hono.spec.ts
# pnpm playwright test tests/basics-server.spec.ts
# pnpm playwright test tests/basics-static-blog.spec.ts

# pnpm --prefix templates/minimal-static dev

# # NOTE: Mac only
# killall node

# node --run format:fix
# node --run lint:es:fix

# set -e

# pnpm install --frozen-lockfile

# # TODO: More
# # node --run syncpack:lint

# pnpm audit signatures

# node --run lint:commit

# node --run format

# node --run build

# node --run lint:es

# node --run test:unit

# node --run test:integration

# # Lerna…
