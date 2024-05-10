import { getTodos } from '@libs/next-app/utils/prisma-client'
import { addNewTodo } from '../../../utils/actions'

const TodoPage = async () => {

  const todo = await getTodos()
  console.log(`checking the data: ${JSON.stringify(todo)}`)
  return (
    <>
      <h1>To Do</h1>
      <div>This is a todo page</div>
      <ul>
        {todo?.map((list) => (<li key={list.id}>{list.content}</li>))}
      </ul>
      <form action={addNewTodo}>
        <input name="content" type="text" />
        <button type="submit">Add Todo</button>
      </form>
    </>
  )
}

export default TodoPage