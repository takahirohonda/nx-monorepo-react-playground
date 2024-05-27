import { createTodo, getTodos } from '@libs/next-app/utils/prisma-client'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  const todos = await getTodos()

  // or return new Response({ data: todos })? need to check
  return NextResponse.json({ data: todos })
}

export const POST = async (request: Request) => {
  const data = await request.json()
  const results = await createTodo(data.content)

  // return new Response({ message: todo})
  return NextResponse.json({ message: results })
}
