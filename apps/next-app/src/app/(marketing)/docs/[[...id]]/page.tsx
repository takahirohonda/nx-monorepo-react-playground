import Link from 'next/link'

const TodoPage = ({ params }: any) => {
  return (
    <>
      <h1>Dynamic Route Optional Catch All</h1>
      <div>This is inside the optional catch-all segment...</div>
      <div>params are {JSON.stringify(params)}</div>
      <Link
        href="https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes"
        target="-blank"
      />
    </>
  )
}

export default TodoPage
