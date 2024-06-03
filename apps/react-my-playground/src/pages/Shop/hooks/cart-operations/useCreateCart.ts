import { useCallback } from 'react'
import { CartLineItemInput } from '../../../../types/gql-global-types'
import { UNEXPECTED_ERROR } from '../../../const/error'
import { useCreateCartMutation } from '../../graphql/cart-operations/CreateCart.generated'

export const useCreateCart = () => {
  const [createCartMutation] = useCreateCartMutation()

  const createCart = useCallback(
    async (cartLineItemInput: CartLineItemInput[]) => {
      try {
        const response = await createCartMutation({
          variables: {
            createCartInput: {
              lineItems: cartLineItemInput,
            },
          },
        })
        const lineItems =
          response?.data?.cart.createCart?.cart?.lineItems.physicalItems.map(
            (data) => ({
              lineItemEntityId: data.entityId,
              quantity: data.quantity,
            })
          )
        const cartEntityId = response?.data?.cart.createCart?.cart?.entityId
        const graphqlErrors = response?.errors

        if (graphqlErrors || !cartEntityId || !lineItems) {
          throw new Error(`graphql err: ${graphqlErrors?.join(',')}`)
        }
        return {
          cartEntityId,
          lineItems,
        }
      } catch (e) {
        throw new Error(`createCart ${UNEXPECTED_ERROR}: ${e}`)
      }
    },
    [createCartMutation]
  )

  return { createCart }
}
