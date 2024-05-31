import { useGetCategoriesQuery } from '../graphql/experimenting/GetCategories.generated'
import { useGetProductsCollectionQuery } from '../graphql/experimenting/GetProductsByCategory.generated'

export const useGetShopProducts = () => {
  const { data } = useGetCategoriesQuery()

  const categories = data?.site.categoryTree[0]
  const terminalCategoryId =
    categories?.children.find((data) => data.name === 'Onboarding Shop')
      ?.entityId ?? 25

  const { data: productsFromCollectionQuery } = useGetProductsCollectionQuery({
    variables: { entityId: terminalCategoryId },
  })

  const products =
    productsFromCollectionQuery?.site?.category?.products?.edges || []
  return { products }
}
