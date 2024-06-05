import { useCallback } from 'react'
import { useGetCartLazyQuery } from '../graphql/cart-operations/GetCart.generated'

export const useGetCart = () => {
  const [getCart] = useGetCartLazyQuery()

  const getCartByEntityId = useCallback(
    async (entityId: string) => {
      const data = await getCart({
        variables: {
          entityId,
        },
      })
      return data.data?.site.cart
    },
    [getCart]
  )

  return { getCartByEntityId }
}
