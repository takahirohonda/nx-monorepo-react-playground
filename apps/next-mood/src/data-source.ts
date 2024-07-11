import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User, Account, EntryAnalysis, JournalEntry } from './entity'

import dotenv from 'dotenv'

// Load environment variables from .env file at the root.
dotenv.config()

export const dataSource = new DataSource({
  type: 'postgres',
  url: process.env.MOOD_DATABASE_URL,
  synchronize: true, // This should create the table automatically
  logging: true, // Enable logging to see SQL statements
  entities: [User, Account, EntryAnalysis, JournalEntry],
  migrations: ['apps/next-mood/src/migrations/*.ts'], // Ensure this path is correct
  subscribers: [],
})

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })
