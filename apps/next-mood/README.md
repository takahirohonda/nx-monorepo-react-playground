# Mood App

## Technologies

Using [Neon](https://neon.tech/) for database services & [Clerk](https://clerk.com/) for auth.

## Neon

```bash
# Install
brew install neonctl

# authenticate
neonctl auth

# create dev branch
neonctl branched create --name {branch-name} --project-id {id}
```

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
npx typeorm init --name apps/next-mood --database postgres
```

2. Migration

We need to generate migration and then run 🎉.

```bash
## Generate
TS_NODE_PROJECT=./tsconfig.typeorm.json npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate apps/next-mood/src/migrations/update-post-table -d apps/next-mood/src/data-source.ts

## Run Migration
TS_NODE_PROJECT=./tsconfig.typeorm.json npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d apps/next-mood/src/data-source.ts
```

## TypeORM Troubleshoot

### 1. migration doesn't run 😢

```bash
## Generate
TS_NODE_PROJECT=./tsconfig.typeorm.json npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate apps/next-mood/src/migrations/update-post-table -d apps/next-mood/src/data-source.ts

## Run Migration
TS_NODE_PROJECT=./tsconfig.typeorm.json npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d apps/next-mood/src/data-source.ts
```

None of these works...

```bash
# None of these works
# yarn typeorm migration:run -d apps/next-mood/src/data-source.ts
npx typeorm-ts-node-esm migration:run -- -d apps/next-mood/src/data-source.ts

npx typeorm-ts-node-esm migration:generate apps/next-mood/src/migrations/update-post-table -d apps/next-mood/src/data-source.ts

npx typeorm-ts-node-esm migration:generate apps/next-mood/src/migrations/update-post-table -d apps/next-mood/src/data-source.ts --project ./tsconfig.typeorm.json
```

It errors

```bash
https://stackoverflow.com/questions/59435293/typeorm-entity-in-nestjs-cannot-use-import-statement-outside-a-module

npx typeorm-ts-node-esm migration:generate apps/next-mood/src/migrations/update-post-table -d apps/next-mood/src/data-source.ts
Error during migration generation:
Error: Unable to open file: "/Users/taka/code/mdh/nx-monorepo-react-playground/apps/next-mood/src/data-source.ts". Cannot use import statement outside a module
at CommandUtils.loadDataSource (/Users/taka/code/mdh/nx-monorepo-react-playground/node_modules/typeorm/commands/CommandUtils.js:22:19)
at async Object.handler (/Users/taka/code/mdh/nx-monorepo-react-playground/node_modules/typeorm/commands/MigrationGenerateCommand.js:73:26)f
```

## Prisma

Move to TypeORM. Not using Prisma for this project

## Initialising prisma

```bash
# --output is to add the path into the generate. so it creates folder at the root... I manually moved to mood-next
yarn prisma init --datasource-provider postgresql
```

If we have ``, then it will add output to the generator. We'll generate the client to `node_modules`.

```prisma
generator client {
  provider = "prisma-client-js"
  output = "apps/next-mood/prisma"
}
```

Add `.env` in the root folder (the file url is read from the .env in the root because migrate script runs at the root level).

`migrate` script in `project.json` will create the data base. Now we can see `migrations` folder and `dev.db` in the `prisma` folder. The `--name init` argument will create the db and table.

## Scripts

```bash
yarn nx migrate next-mood
yarn nx generate-prisma-client next-mood
```

# Trouble shooting

I initially had `migrate` as the target name. `nx migrate` is a default call in Nx, so it executes the nx migrate instead of prisma migrate.

```json
 "targets": {
    "migrate-prisma": {
      "executor": "nx:run-commands",
      "options": {
        "command": "npx prisma migrate dev --name ver1 --schema apps/next-mood/prisma/schema.prisma"
      }
    },
```
