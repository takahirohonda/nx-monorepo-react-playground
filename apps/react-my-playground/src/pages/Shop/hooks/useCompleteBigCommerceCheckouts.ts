import { useCallback, useState } from 'react'
import {
  CartLineItemInput,
  CheckoutAddressInput,
} from '../../../types/gql-global-types'
import { useCreateCart } from './cart-operations/useCreateCart'
import { useAddBillingAddress } from './cart-operations/useAddBillingAddress'
import { useAddShippingConsignments } from './cart-operations/useAddShippingConsignments'
import { useCompleteCheckout } from './cart-operations/useCompleteCheckout'
import { useGetCart } from './useGetCart'
import { useSelectCheckoutShippingOption } from './cart-operations/useSelectCheckoutShippingOption'

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
  const { getCartByEntityId } = useGetCart()

  const { selectCheckoutShippingOption } = useSelectCheckoutShippingOption()

  const completeBigCommerceCheckout = useCallback(
    async ({ cartItems, shippingAddress }: CompleteBigCommerceCheckoutArgs) => {
      setIsCheckoutInProgress(true)
      try {
        const { cartEntityId, lineItems } = await createCart(cartItems)

        const cartData = await getCartByEntityId(cartEntityId)

        console.log(`this is the cart id from create cart${cartEntityId}`)
        console.log(
          `checking if cart exists with get cart: ${JSON.stringify(cartData)}`
        )

        const { checkoutEntityIdFromAddBillingAddress } =
          await addBillingAddress({
            // https://developer.bigcommerce.com/docs/rest-storefront/checkouts
            // cartId and checkoutId are the same
            checkoutEntityId: cartEntityId,
            address: shippingAddress,
          })

        const {
          checkoutEntityIdFromAddShippingConsignments,
          consignmentEntityId,
          shippingOptionEntityId,
        } = await addShippingConsignments({
          checkoutEntityId: checkoutEntityIdFromAddBillingAddress,
          lineItems,
          address: shippingAddress,
        })

        const { checkoutEntityIdFromSelectCheckoutShippingOption } =
          await selectCheckoutShippingOption({
            checkoutEntityId: checkoutEntityIdFromAddShippingConsignments,
            consignmentEntityId,
            shippingOptionEntityId,
          })

        const { orderEntityId, paymentAccessToken } = await completeCheckout(
          checkoutEntityIdFromSelectCheckoutShippingOption
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
    [
      addBillingAddress,
      addShippingConsignments,
      completeCheckout,
      createCart,
      getCartByEntityId,
      selectCheckoutShippingOption,
    ]
  )

  return {
    completeBigCommerceCheckout,
    isCheckoutInProgress,
    hasCheckoutError,
  }
}
