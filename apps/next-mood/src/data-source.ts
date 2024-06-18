import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entity/User'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.MOOD_DATABASE_URL,
  synchronize: true, // This should create the table automatically
  logging: true, // Enable logging to see SQL statements
  entities: [User],
  migrations: ['apps/next-mood/src/migrations/*.ts'], // Ensure this path is correct
  subscribers: [],
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })
