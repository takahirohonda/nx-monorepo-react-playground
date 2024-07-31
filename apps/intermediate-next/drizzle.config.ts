import 'dotenv/config'
import type { Config } from 'drizzle-kit'

export default {
  // this path has to be from the root folder perspective where drizzle-kit push is run
  schema: './apps/intermediate-next/src/db/schema.ts',
  dialect: 'sqlite',
  out: './migrations',
  driver: 'turso',
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
  verbose: true,
  strict: true,
} satisfies Config
