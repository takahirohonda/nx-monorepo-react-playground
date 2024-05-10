# prisma-client

This library was generated with [Nx](https://nx.dev).

## Installing

```bash
yarn add @prisma/client sqlite3
yarn add prisma -D
```

## Initialising prisma

```bash
yarn prisma init --datasource-provider sqlite --output libs/next-app/utils/prisma-client
```

Then create dev.db and run `chmod 777 libs/next-app/utils/prisma-client/prisma/dev.db`

## Scripts

```bash
yarn nx migrate next-app-utils-prisma-client
yarn nx generate-prisma-client next-app-utils-prisma-client
yarn nx build next-app-utils-prisma-client

yarn nx test next-app-utils-prisma-client
```
