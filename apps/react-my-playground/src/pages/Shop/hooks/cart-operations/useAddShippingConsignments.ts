import { useCallback } from 'react'
import {
  CheckoutAddressInput,
  CheckoutConsignmentLineItemInput,
} from '../../../../types/gql-global-types'
import { UNEXPECTED_ERROR } from '../../../const/error'
import { useAddCheckoutShippingConsignmentsMutation } from '../../graphql/cart-operations/AddCheckoutShippingConsignments.generated'

interface AddCheckoutShippingConsignmentArgs {
  checkoutEntityId: string
  address: CheckoutAddressInput
  lineItems: CheckoutConsignmentLineItemInput[]
}
export const useAddShippingConsignments = () => {
  const [addShippingConsignmentsMutation] =
    useAddCheckoutShippingConsignmentsMutation()

  const addShippingConsignments = useCallback(
    async ({
      checkoutEntityId: entityId,
      address,
      lineItems,
    }: AddCheckoutShippingConsignmentArgs) => {
      try {
        const response = await addShippingConsignmentsMutation({
          variables: {
            addCheckoutShippingConsignmentsInput: {
              data: {
                consignments: [
                  {
                    address,
                    lineItems,
                  },
                ],
              },
              checkoutEntityId: entityId,
            },
          },
        })
        const checkoutEntityId =
          response?.data?.checkout.addCheckoutShippingConsignments?.checkout
            ?.entityId
        const graphqlErrors = response?.errors

        if (graphqlErrors || !checkoutEntityId) {
          throw new Error(`graphql err: ${graphqlErrors?.join(',')}`)
        }
        return {
          checkoutEntityIdFromAddShippingConsignments: checkoutEntityId,
        }
      } catch (e) {
        throw new Error(`addShippingConsignments ${UNEXPECTED_ERROR}: ${e}`)
      }
    },
    [addShippingConsignmentsMutation]
  )

  return { addShippingConsignments }
}
