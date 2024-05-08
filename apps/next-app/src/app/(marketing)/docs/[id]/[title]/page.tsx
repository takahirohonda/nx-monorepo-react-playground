const TodoPage = ({ params }: any) => {
  return (
    <>
      <h1>Dynamic Route with 2 params</h1>
      <div>Dynamic Route 2 params</div>
      <div>Id param is {params.id} and Title param is {params.title}</div>
    </>
  )
}

export default TodoPage