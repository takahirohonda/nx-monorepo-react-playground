'use server'

import { revalidatePath } from 'next/cache'
import { createTodo, completeTodo, toggleTodo } from '@libs/next-app/utils/prisma-client'

export const addNewTodo = async (formData: any) => {
  const content = formData.get('content')
  if (content) {
    await createTodo(formData.get('content'))
    revalidatePath('/todo')
  }
}

export const tickTodo = async (id: string, completed: boolean) => {
  await toggleTodo(id, completed)
  revalidatePath('/todo')
}

