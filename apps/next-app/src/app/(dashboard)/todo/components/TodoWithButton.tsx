'use client'
import { useTransition } from "react"
import { tickTodo } from "../../../../utils/actions"

export const TodoWithButton = ({ content, completed, id }
  : {content: string, completed: boolean, id: string}) => {

  const [ isPending, startTransition ] = useTransition()
  return (
    <li className="flex flex-row gap-4" >
      {content}
      {completed 
        ? <button
        onClick={() => startTransition(
          () => tickTodo(id, completed)
        )} 
        >✅</button>
        : <button onClick={() => startTransition(
          () => tickTodo(id, completed)
        )} 
          className="border border-black">Done</button>}
    </li>
  )
}