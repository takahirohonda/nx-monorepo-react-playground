## TypeORM Reference

1. Using Entity Manager API to manage data

https://typeorm.io/entity-manager-api

The data source have `manager`.

2. Using Query Builder

https://typeorm.io/select-query-builder

## Troubleshoot

I added to get rid of `no initializer` error.

```json
"compilerOptions": {
    "strictPropertyInitialization": false,
    ...
}
```

```bash
17   id: string
     ~~
apps/next-mood/src/entity/User.ts:20:3 - error TS2564: Property 'email' has no initializer and is not definitely assigned in the constructor.

20   email: string
     ~~~~~
apps/next-mood/src/entity/User.ts:23:3 - error TS2564: Property 'clerkId' has no initializer and is not definitely assigned in the constructor.

23   clerkId: string
     ~~~~~~~
apps/next-mood/src/entity/User.ts:26:3 - error TS2564: Property 'name' has no initializer and is not definitely assigned in the constructor.

26   name: string
     ~~~~
apps/next-mood/src/entity/User.ts:29:3 - error TS2564: Property 'createdAt' has no initializer and is not definitely assigned in the constructor.

29   createdAt: Date
     ~~~~~~~~~
apps/next-mood/src/entity/User.ts:32:3 - error TS2564: Property 'updatedAt' has no initializer and is not definitely assigned in the constructor.

32   updatedAt: Date
     ~~~~~~~~~
apps/next-mood/src/entity/User.ts:35:3 - error TS2564: Property 'account' has no initializer and is not definitely assigned in the constructor.

35   account: Account
     ~~~~~~~
apps/next-mood/src/entity/User.ts:38:3 - error TS2564: Property 'entries' has no initializer and is not definitely assigned in the constructor.

38   entries: JournalEntry[]
     ~~~~~~~
apps/next-mood/src/entity/User.ts:41:3 - error TS2564: Property 'analysis' has no initializer and is not definitely assigned in the constructor.

41   analysis: EntryAnalysis[]
```
