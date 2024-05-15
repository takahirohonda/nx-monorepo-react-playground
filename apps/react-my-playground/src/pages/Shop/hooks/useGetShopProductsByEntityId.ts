import { useGetProductsByIdsQuery } from "../graphql/GetProductsByIds.generated"

export const useGetShopProductsByEntityIds = () => {

  const { data } = useGetProductsByIdsQuery(
    { variables: { entityIds: [114, 117] } }
  )

  const products = data?.site?.products?.edges || []

  return { products }

}