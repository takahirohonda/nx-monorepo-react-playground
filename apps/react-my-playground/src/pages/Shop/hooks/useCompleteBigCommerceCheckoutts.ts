import { useCallback, useState } from 'react'
import {
  CartLineItemInput,
  CheckoutAddressInput,
} from '../../../types/gql-global-types'
import { useCreateCart } from './cart-operations/useCreateCart'
import { useAddBillingAddress } from './cart-operations/useAddBillingAddress'
import { useAddShippingConsignments } from './cart-operations/useAddShippingConsignments'
import { useCompleteCheckout } from './cart-operations/useCompleteCheckout'

export interface CompleteBigCommerceCheckoutArgs {
  cartItems: CartLineItemInput[]
  shippingAddress: CheckoutAddressInput
}

export const useCompleteBigCommerceCheckoutAndPayment = () => {
  const [isCheckoutInProgress, setIsCheckoutInProgress] = useState(false)
  const [hasCheckoutError, setHasCheckoutError] = useState(false)
  const { createCart } = useCreateCart()
  const { addBillingAddress } = useAddBillingAddress()
  const { addShippingConsignments } = useAddShippingConsignments()
  const { completeCheckout } = useCompleteCheckout()

  const completeBigCommerceCheckout = useCallback(
    async ({ cartItems, shippingAddress }: CompleteBigCommerceCheckoutArgs) => {
      setIsCheckoutInProgress(true)
      try {
        const { cartEntityId, lineItems } = await createCart(cartItems)
        const { checkoutEntityIdFromAddBillingAddress } =
          await addBillingAddress({
            checkoutEntityId: cartEntityId,
            address: shippingAddress,
          })
        const { checkoutEntityIdFromAddShippingConsignments } =
          await addShippingConsignments({
            checkoutEntityId: checkoutEntityIdFromAddBillingAddress,
            lineItems,
            address: shippingAddress,
          })

        const { orderEntityId, paymentAccessToken } = await completeCheckout(
          checkoutEntityIdFromAddShippingConsignments
        )
        setIsCheckoutInProgress(false)
        return {
          orderEntityId,
          paymentAccessToken,
        }
      } catch (e) {
        console.log(`completeBigCommerceCheckout error: ${e}`)
        setIsCheckoutInProgress(false)
        setHasCheckoutError(true)
      }
      return { paymentAccessToken: '' }
    },
    [addBillingAddress, addShippingConsignments, completeCheckout, createCart]
  )

  return {
    completeBigCommerceCheckout,
    isCheckoutInProgress,
    hasCheckoutError,
  }
}
