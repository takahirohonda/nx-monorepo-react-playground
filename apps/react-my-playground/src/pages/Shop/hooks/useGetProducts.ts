import { useGetProductsQuery } from '../graphql/GetProducts.generated'

export const useGetProducts = () => {
  const { data } = useGetProductsQuery()

  const products = data?.site?.products?.edges || []

  console.log(JSON.stringify(products))

  return { products }
}
