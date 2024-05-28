export const Home = () => {
  const check = import.meta.env.VITE_BIGCOMMERCE_API_URL

  return (
    <>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <p>Checking .env value: {check}</p>
    </>
  )
}
