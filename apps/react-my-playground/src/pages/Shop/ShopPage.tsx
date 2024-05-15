import { ProductDisplay } from "./components/ProductDisplay"
import { useGetShopProductsByEntityIds } from "./hooks/useGetShopProductsByEntityId"

export const ShopPage = () => {

  const { products } = useGetShopProductsByEntityIds()

  return(
    <div className="flex-col gap-4">
      <h1 className="text-xl">ShopPage</h1>
      <div className="flex gap-4">
        {
          products.map(product => 
            <ProductDisplay 
              imgUrl={product.node.defaultImage?.url320wide || ''} 
              name={product.node.name} 
              price={product.node.prices?.price.value}/>)
        }
      </div>
      {/* {JSON.stringify(products)} */}
    </div>
  )
}