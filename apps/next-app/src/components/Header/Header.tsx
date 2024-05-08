import Link from "next/link"

export const Header = () => {

  return (

     <ul className="m-4 flex gap-x-4">
     <li>
       <Link href="/">Home</Link>
     </li>
     <li>
       <Link href="/todo">To Do</Link>
     </li>
     <li>
       <Link href="/report">Report</Link>
     </li>
     <li>
       <Link href="/docs">Docs</Link>
     </li>
   </ul>
  )
}