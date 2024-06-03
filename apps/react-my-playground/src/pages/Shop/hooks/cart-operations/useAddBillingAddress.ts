import { useCallback } from 'react'
import { CheckoutAddressInput } from '../../../../types/gql-global-types'
import { UNEXPECTED_ERROR } from '../../../const/error'
import { useAddCheckoutBillingAddressMutation } from '../../graphql/cart-operations/AddCheckoutBillingAddress.generated'

interface AddBillingAddressArgs {
  checkoutEntityId: string
  address: CheckoutAddressInput
}
export const useAddBillingAddress = () => {
  const [addBillingAddressMutation] = useAddCheckoutBillingAddressMutation({})

  const addBillingAddress = useCallback(
    async ({ checkoutEntityId: entityId, address }: AddBillingAddressArgs) => {
      try {
        const response = await addBillingAddressMutation({
          variables: {
            addCheckoutBillingAddressInput: {
              checkoutEntityId: entityId,
              data: {
                address,
              },
            },
          },
        })
        const checkoutEntityId =
          response?.data?.checkout.addCheckoutBillingAddress?.checkout?.entityId
        const graphqlErrors = response?.errors

        if (graphqlErrors || !checkoutEntityId) {
          throw new Error(`graphql err: ${graphqlErrors?.join(',')}`)
        }
        return {
          checkoutEntityIdFromAddBillingAddress: checkoutEntityId,
        }
      } catch (e) {
        throw new Error(`addBillingAddress ${UNEXPECTED_ERROR}: ${e}`)
      }
    },
    [addBillingAddressMutation]
  )

  return { addBillingAddress }
}
