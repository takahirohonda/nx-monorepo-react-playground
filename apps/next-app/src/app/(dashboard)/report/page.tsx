const getData = async () => {
  await new Promise<void>((res) => setTimeout(() => res(), 2000))
  return { data: [1, 2, 3]}

}

const ReportPage = async () => {
  const data = await getData()
  // This is only logged on the server. Not in the browser because it's a server component.
  console.log(data)
  return (
    <>
      <h1>Report</h1>
      <div>This is a Report page</div>
      <div>This is an async component. React cannot do async function for a component, but next JS can</div>
    </>
  )
}

export default ReportPage