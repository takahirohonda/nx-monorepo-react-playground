import { useGetProductsQuery } from '../graphql/GetProducts.generated'

export const useGetProducts = () => {
  const { data } = useGetProductsQuery({
    variables: { pageSize: 5 },
  })

  const products = data?.site?.products?.edges || []

  console.log(JSON.stringify(products))

  return { products }
}
