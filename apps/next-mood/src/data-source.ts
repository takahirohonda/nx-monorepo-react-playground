import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User, Account, EntryAnalysis, JournalEntry } from './entity'

import dotenv from 'dotenv'

// // Load environment variables from .env file at the root. this is for migration.
dotenv.config()

let dataSource: DataSource

if (!global.dataSource) {
  global.dataSource = new DataSource({
    type: 'postgres',
    url: process.env.MOOD_DATABASE_URL,
    synchronize: true, // This should create the table automatically
    logging: true, // Enable logging to see SQL statements
    entities: [User, Account, JournalEntry, EntryAnalysis],
    migrations: ['apps/next-mood/src/migrations/*.ts'], // Ensure this path is correct
    subscribers: [],
  })
  global.dataSource
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!')
      dataSource = global.dataSource
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err)
    })
}

dataSource = global.dataSource

export default dataSource

// export const dataSource = new DataSource({
//   type: 'postgres',
//   url: process.env.MOOD_DATABASE_URL,
//   synchronize: true, // This should create the table automatically
//   logging: true, // Enable logging to see SQL statements
//   entities: [User, Account, JournalEntry, EntryAnalysis],
//   migrations: ['apps/next-mood/src/migrations/*.ts'], // Ensure this path is correct
//   subscribers: [],
// })

// dataSource
//   .initialize()
//   .then(() => {
//     console.log('Data Source has been initialized!')
//   })
//   .catch((err) => {
//     console.error('Error during Data Source initialization', err)
//   })
