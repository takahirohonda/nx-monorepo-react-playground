import { useCallback } from 'react'
import { useGetAllCartsLazyQuery } from '../../graphql/cart-operations/GetAllCarts.generated'

export const useGetCart = () => {
  const [getAllCarts, { loading }] = useGetAllCartsLazyQuery()

  const getCart = useCallback(async () => {
    const carts = await getAllCarts({
      fetchPolicy: 'network-only',
    })
    return {
      existingCartEntityId: carts.data?.site.cart?.entityId,
    }
  }, [getAllCarts])

  return {
    getCart,
    loading,
  }
}
