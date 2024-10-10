import { useGetProductsQuery } from './graphql/GetProducts.generated'

export const TestPersistCachePage = () => {
  const { data, loading } = useGetProductsQuery({
    variables: { pageSize: 5 },
    fetchPolicy: 'cache-only',
  })

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <h1>Persist Cache Test</h1>
      <p>The data below should come from the cache</p>
      <p>{JSON.stringify(data)}</p>
    </>
  )
}
