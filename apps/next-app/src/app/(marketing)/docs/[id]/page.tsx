const TodoPage = ({ params }: any) => {
  return (
    <>
      <h1>Dynamic Route Catch All</h1>
      <div>Dynamic Route Catch all</div>
      <div>params are {JSON.stringify(params)}</div>
    </>
  )
}

export default TodoPage
