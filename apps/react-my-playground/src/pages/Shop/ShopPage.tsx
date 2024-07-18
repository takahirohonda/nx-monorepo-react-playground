import { useCallback } from 'react'

import { useGetProducts } from './hooks/useGetProducts'
import { useNavigate } from 'react-router-dom'
import { ROOT } from '../routes/routes'
import { useGetAllCartsQuery } from './graphql/cart-operations/GetAllCarts.generated'
import { ProductDisplay } from './components/ProductDisplay'
import { ProductDisplayWrapper } from './components/ProductDisplayWrapper'
import { ButtonPrimary } from './components/ButtonPrimary'
import { useDeleteExistingCart } from './hooks/useDeleteExistingCart'
import { useCreateCart } from './hooks/cart-operations/useCreateCart'

export const ShopPage = () => {
  const { products } = useGetProducts()

  const { deleteExistingCart, isDeleteCartInProgress, hasDeleteCartError } =
    useDeleteExistingCart()

  const { createCart } = useCreateCart()

  const { data: cartItemsData, refetch } = useGetAllCartsQuery()
  const navigate = useNavigate()

  const handleCheckout = useCallback(() => {
    navigate(ROOT.SHOP.CHECKOUT.relative)
  }, [navigate])

  const handleCreateCart = useCallback(async () => {
    const cartLineItem = products.map((product) => {
      return {
        productEntityId: product.node.entityId,
        quantity: 2,
      }
    })
    await createCart(cartLineItem)
    refetch()
  }, [createCart, products, refetch])

  const handleDeleteCart = useCallback(async () => {
    await deleteExistingCart()
    refetch()
  }, [deleteExistingCart, refetch])

  return (
    <div className="flex-col gap-4">
      <h1 className="text-xl">ShopPage</h1>
      <div className="flex gap-4"></div>
      <ProductDisplayWrapper>
        {products.map((product) => {
          return (
            <ProductDisplay
              imgUrl={product.node.defaultImage?.url320wide || ''}
              name={product.node.name}
              price={product.node.prices?.price.value}
              key={product.node.entityId}
            />
          )
        })}
      </ProductDisplayWrapper>
      <div className="flex  w-full gap-[36px] mt-[36px] mb-[32px]">
        <ButtonPrimary
          onClickHandler={handleCreateCart}
          label="Create Cart"
          variant="green"
        />
        <ButtonPrimary
          onClickHandler={handleDeleteCart}
          label="Delete Cart"
          variant="pink"
        />
        <ButtonPrimary
          onClickHandler={handleCheckout}
          label="Go To Checkout"
          variant="blue"
        />
      </div>
      <div>
        {isDeleteCartInProgress && <span>Delete cart in progress...</span>}
        {hasDeleteCartError && <span>Delete cart error</span>}
      </div>
      <div className="flex flex-col gap-[16px] p-[24px] bg-lime-200 w-[20%]">
        <h2 className="text-xl">Cart Contents</h2>
        <ul>
          {cartItemsData?.site?.cart?.lineItems.physicalItems?.map((item) => {
            return (
              <li>
                {item.name}, {item.quantity}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
