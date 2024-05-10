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

Add `.env` in the root folder (the file url is read from the .env in the root because migrate script runs at the root level).

`migrate` script in `project.json` will create the data base. Now we can see `migrations` folder and `dev.db` in the `prisma` folder. The `--name init` argument will create the db and table.

## Scripts

```bash
yarn nx migrate next-app-utils-prisma-client
yarn nx generate-prisma-client next-app-utils-prisma-client
yarn nx build next-app-utils-prisma-client

yarn nx test next-app-utils-prisma-client
```
