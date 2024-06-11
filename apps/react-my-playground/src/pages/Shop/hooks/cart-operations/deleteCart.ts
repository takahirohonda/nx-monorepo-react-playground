import { useCallback } from 'react'

import { UNEXPECTED_ERROR } from '../../../const/error'
import { useDeleteCartMutation } from '../../graphql/cart-operations/DeleteCart.generated'

interface DeleteCartArgs {
  cartEntityId: string
}
export const useDeleteCart = () => {
  const [deleteCartMutation] = useDeleteCartMutation()

  const deleteCart = useCallback(
    async ({ cartEntityId }: DeleteCartArgs) => {
      try {
        const response = await deleteCartMutation({
          variables: {
            deleteCartInput: {
              cartEntityId,
            },
          },
        })
        const cartDeletedEntityId =
          response?.data?.cart.deleteCart?.deletedCartEntityId
        const graphqlErrors = response?.errors

        if (graphqlErrors || !cartDeletedEntityId) {
          throw new Error(`graphql err: ${graphqlErrors?.join(',')}`)
        }
        return {
          cartDeletedEntityId,
        }
      } catch (e) {
        throw new Error(`deleteCart ${UNEXPECTED_ERROR}: ${e}`)
      }
    },
    [deleteCartMutation]
  )

  return { deleteCart }
}
