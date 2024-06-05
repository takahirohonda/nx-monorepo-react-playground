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

        const checkoutData =
          response?.data?.checkout.addCheckoutShippingConsignments?.checkout
        const checkoutEntityId = checkoutData?.entityId
        const graphqlErrors = response?.errors

        const shippingConsignment = checkoutData?.shippingConsignments
        const consignmentEntityId =
          (shippingConsignment && shippingConsignment[0].entityId) || ''

        const availableShippingOptions =
          shippingConsignment && shippingConsignment[0].availableShippingOptions

        const shippingOptionEntityId =
          (availableShippingOptions && availableShippingOptions[0].entityId) ||
          ''

        if (graphqlErrors || !checkoutEntityId) {
          throw new Error(`graphql err: ${graphqlErrors?.join(',')}`)
        }
        return {
          checkoutEntityIdFromAddShippingConsignments: checkoutEntityId,
          consignmentEntityId,
          shippingOptionEntityId,
        }
      } catch (e) {
        throw new Error(`addShippingConsignments ${UNEXPECTED_ERROR}: ${e}`)
      }
    },
    [addShippingConsignmentsMutation]
  )

  return { addShippingConsignments }
}
