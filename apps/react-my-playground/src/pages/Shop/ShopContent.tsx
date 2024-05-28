import { clsx } from 'clsx'
import { ProductDisplay } from './components/ProductDisplay'
// import { useGetShopProductsByEntityIds } from "./hooks/useGetShopProductsByEntityId"
import { useCallback } from 'react'
import { useGetShopProducts } from './hooks/useGetShopProductsByCategory'

interface ShopContentProps {
  setHasCheckedOut: (value: boolean) => void
}
export const ShopContent = ({ setHasCheckedOut }: ShopContentProps) => {
  // const { products } = useGetShopProductsByEntityIds()

  const { products } = useGetShopProducts()

  const handleCheckout = useCallback(() => {
    setHasCheckedOut(true)
  }, [setHasCheckedOut])

  return (
    <div className="flex-col gap-4">
      <h1 className="text-xl">ShopPage</h1>
      <div className="flex gap-4">
        {products.map((product) => (
          <ProductDisplay
            key={product.node.entityId}
            imgUrl={product.node.defaultImage?.url320wide || ''}
            name={product.node.name}
            price={product.node.prices?.price.value}
          />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <button
          onClick={handleCheckout}
          className={clsx(
            `p-3 w-40 rounded-md border
              border-blue-600 bg-blue-600
              text-white text-lg 
              hover:bg-white hover:text-blue-600`
          )}
        >
          Checkout
        </button>
      </div>
      {/* {JSON.stringify(products)} */}
    </div>
  )
}
