
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

export const completeTodo = async (id: string) => {
  await prisma.todo.update({
    where: { id },
    data: {
      completed: true,
    }
  })
}

export const toggleTodo = async (id: string, completed: boolean) => {
  await prisma.todo.update({
    where: { id },
    data: {
      completed: !completed,
    }
  })
}