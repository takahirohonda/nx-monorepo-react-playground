import { useCallback } from 'react'
import { useGetAllCartsQuery } from '../../graphql/cart-operations/GetAllCarts.generated'

export const useGetCart = () => {
  const { getAllCarts } = useGetAllCartsQuery()

  const getCarts = useCallback(async () => {
    const carts = await getAllCarts()
    return carts
  }, [getAllCarts])

  return {
    getCarts,
  }
}
