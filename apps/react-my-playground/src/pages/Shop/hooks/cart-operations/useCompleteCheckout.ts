import { useCallback } from 'react'
import { UNEXPECTED_ERROR } from '../../../const/error'
import { useCompleteCheckoutMutation } from '../../graphql/cart-operations/CompleteCheckout.generated'

export const useCompleteCheckout = () => {
  const [completeCheckoutMutation] = useCompleteCheckoutMutation()

  const completeCheckout = useCallback(
    async (checkoutEntityId: string) => {
      try {
        const response = await completeCheckoutMutation({
          variables: {
            completeCheckoutInput: {
              checkoutEntityId,
            },
          },
        })
        const orderEntityId =
          response?.data?.checkout.completeCheckout?.orderEntityId
        const paymentAccessToken =
          response?.data?.checkout.completeCheckout?.paymentAccessToken
        const graphqlErrors = response?.errors

        if (graphqlErrors || !orderEntityId || !paymentAccessToken) {
          throw new Error(`graphql err: ${graphqlErrors?.join(',')}`)
        }
        return {
          orderEntityId,
          paymentAccessToken,
        }
      } catch (e) {
        throw new Error(`completeCheckout ${UNEXPECTED_ERROR}: ${e}`)
      }
    },
    [completeCheckoutMutation]
  )

  return { completeCheckout }
}
