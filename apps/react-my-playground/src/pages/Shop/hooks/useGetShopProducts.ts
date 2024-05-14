
import {  useGetCategoriesQuery } from "../graphql/GetCategories.generated"

export const useGetShopProducts = () => {

  const { data }= useGetCategoriesQuery()

  const categories = data?.site.categoryTree

  return { categories }
}