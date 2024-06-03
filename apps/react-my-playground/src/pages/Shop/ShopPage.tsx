import { clsx } from 'clsx'

import { useCallback } from 'react'

import { useGetProducts } from './hooks/useGetProducts'
import { useNavigate } from 'react-router-dom'
import { ROOT } from '../routes/routes'

export const ShopPage = () => {
  const { products } = useGetProducts()
  const navigate = useNavigate()

  const handleCheckout = useCallback(() => {
    navigate(ROOT.SHOP.CHECKOUT.relative)
  }, [navigate])

  return (
    <div className="flex-col gap-4">
      <h1 className="text-xl">ShopPage</h1>
      <div className="flex gap-4"></div>
      <div>{JSON.stringify(products)}</div>
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
