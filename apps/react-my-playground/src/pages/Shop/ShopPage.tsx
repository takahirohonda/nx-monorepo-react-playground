import { useGetShopProducts } from "./hooks/useGetShopProducts"

export const ShopPage = () => {

  const { categories } = useGetShopProducts()
  return(
    <>
  <div>ShopPage</div>
  {JSON.stringify(categories)}
  </>
  )
}