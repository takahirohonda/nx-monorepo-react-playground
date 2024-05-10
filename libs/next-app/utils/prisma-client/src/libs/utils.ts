
import prisma from './prisma-client'

export const getTodos = async () => {
  const todo = await prisma.todo.findMany({})
  return todo
}

export const createTodo = async (content: string) => {

  const todo = await prisma.todo.create({
    data: {
      content,
    }
  })
}