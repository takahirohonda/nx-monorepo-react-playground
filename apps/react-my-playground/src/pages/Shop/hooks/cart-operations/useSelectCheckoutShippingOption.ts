import { useCallback } from 'react'

import { UNEXPECTED_ERROR } from '../../../const/error'
import { useSelectCheckoutShippingOptionMutation } from '../../graphql/cart-operations/SelectCheckoutShippingOption.generated'

interface SelectCheckoutShippingOptionArgs {
  checkoutEntityId: string
  consignmentEntityId: string
  shippingOptionEntityId: string
}
export const useSelectCheckoutShippingOption = () => {
  const [selectCheckoutShippingOptionMutation] =
    useSelectCheckoutShippingOptionMutation()

  const selectCheckoutShippingOption = useCallback(
    async ({
      checkoutEntityId: entityId,
      consignmentEntityId,
      shippingOptionEntityId,
    }: SelectCheckoutShippingOptionArgs) => {
      try {
        const response = await selectCheckoutShippingOptionMutation({
          variables: {
            selectCheckoutShippingOptionInput: {
              consignmentEntityId,
              checkoutEntityId: entityId,
              data: {
                shippingOptionEntityId,
              },
            },
          },
        })
        const checkoutEntityId =
          response?.data?.checkout.selectCheckoutShippingOption?.checkout
            ?.entityId
        const graphqlErrors = response?.errors

        if (graphqlErrors || !checkoutEntityId) {
          throw new Error(`graphql err: ${graphqlErrors?.join(',')}`)
        }
        return {
          checkoutEntityIdFromSelectCheckoutShippingOption: checkoutEntityId,
        }
      } catch (e) {
        throw new Error(
          `SelectCheckoutShippingOption ${UNEXPECTED_ERROR}: ${e}`
        )
      }
    },
    [selectCheckoutShippingOptionMutation]
  )

  return { selectCheckoutShippingOption }
}
