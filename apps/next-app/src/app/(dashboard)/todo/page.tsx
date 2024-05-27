import { getTodos } from '@libs/next-app/utils/prisma-client'
import { addNewTodo } from '../../../utils/actions'
import { TodoWithButton } from './components/TodoWithButton'

const TodoPage = async () => {

  const todo = await getTodos()
  console.log(`checking the data: ${JSON.stringify(todo)}`)
  return (
    <>
      <h1>To Do</h1>
      <div>This is a todo page</div>
      <ul>
        {todo?.map((list) => (<TodoWithButton
          key={list.id}
          id={list.id}
          content={list.content}
          completed={list.completed}/>))}
      </ul>
      <form action={addNewTodo} className="flex flex-col gap-4 w-3/12">
        <input name="content" type="text" className="border-2 border-black/20 rounded"/>
        <button className="bg-blue-500 border border-blue-500 text-white py-2 rounded w-28 hover:bg-white hover:text-blue-800" type="submit">Add Todo</button>
      </form>
    </>
  )
}

export default TodoPage