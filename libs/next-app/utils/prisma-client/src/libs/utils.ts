
import prisma from './prisma-client'
// Workaround. Haven't figured out how to generate prisma-client specific
// to this project with prisma generate command 😅
export type ToDoData = {
  id: string
  createdAt: string
  content: string
  completed: boolean
}

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