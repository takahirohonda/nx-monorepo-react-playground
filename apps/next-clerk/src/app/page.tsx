import { auth } from '@clerk/nextjs/server'

export default async function Home() {
  const { userId } = auth()
  console.log(`checking userId in home page: ${userId}`)
  return <h1>Home Page</h1>
}
