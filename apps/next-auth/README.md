# next-auth

This project uses `auth.js` and `TypeOrm`.

## Auth.js

https://authjs.dev/getting-started

Google Provider: https://authjs.dev/getting-started/providers/google

This is the link to configure OAuth with Google: https://console.developers.google.com/apis/credentials

Google OAuth 2.0 doc: https://developers.google.com/identity/protocols/oauth2

## TypeORM

1. Install & setup (https://typeorm.io/)

```bash
yarn add typeorm reflect-metadata pg ts-node

```

Add this to `tsconfig.json`

```json
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
```

```bash
npx typeorm init --name apps/next-auth --database postgres
```

2. Migration

We need to generate migration and then run 🎉.

```bash
## Generate
TS_NODE_PROJECT=./tsconfig.typeorm.json npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate apps/next-auth/src/migrations/update-post-table -d apps/next-auth/src/data-source.ts

## Run Migration
TS_NODE_PROJECT=./tsconfig.typeorm.json npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d apps/next-auth/src/data-source.ts
```

## TypeORM Troubleshoot

### 1. migration doesn't run 😢

```bash
## Generate
TS_NODE_PROJECT=./tsconfig.typeorm.json npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate apps/next-auth/src/migrations/update-post-table -d apps/next-auth/src/data-source.ts

## Run Migration
TS_NODE_PROJECT=./tsconfig.typeorm.json npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d apps/next-auth/src/data-source.ts
```

None of these works...

```bash
# None of these works
# yarn typeorm migration:run -d apps/next-auth/src/data-source.ts
npx typeorm-ts-node-esm migration:run -- -d apps/next-auth/src/data-source.ts

npx typeorm-ts-node-esm migration:generate apps/next-auth/src/migrations/update-post-table -d apps/next-auth/src/data-source.ts

npx typeorm-ts-node-esm migration:generate apps/next-auth/src/migrations/update-post-table -d apps/next-auth/src/data-source.ts --project ./tsconfig.typeorm.json
```

It errors

```bash
https://stackoverflow.com/questions/59435293/typeorm-entity-in-nestjs-cannot-use-import-statement-outside-a-module

npx typeorm-ts-node-esm migration:generate apps/next-auth/src/migrations/update-post-table -d apps/next-auth/src/data-source.ts
Error during migration generation:
Error: Unable to open file: "/Users/taka/code/mdh/nx-monorepo-react-playground/apps/next-auth/src/data-source.ts". Cannot use import statement outside a module
at CommandUtils.loadDataSource (/Users/taka/code/mdh/nx-monorepo-react-playground/node_modules/typeorm/commands/CommandUtils.js:22:19)
at async Object.handler (/Users/taka/code/mdh/nx-monorepo-react-playground/node_modules/typeorm/commands/MigrationGenerateCommand.js:73:26)f
```
