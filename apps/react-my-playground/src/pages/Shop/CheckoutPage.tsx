import { useCallback } from 'react'

import { clsx } from 'clsx'
import { useCompleteBigCommerceCheckoutAndPayment } from './hooks/useCompleteBigCommerceCheckoutts'
import {
  CART_LINE_ITEMS,
  MOCK_PAYMENT_INSTRUMENT,
  MOCK_SHIPPING_ADDRESS,
} from './mockData/mock'
import { useCompletePayment } from './hooks/payment/useCompletePayment'

export const CheckoutPage = () => {
  const {
    completeBigCommerceCheckout,
    isCheckoutInProgress,
    hasCheckoutError,
  } = useCompleteBigCommerceCheckoutAndPayment()

  const { completePayment } = useCompletePayment()

  const onClickHandler = useCallback(async () => {
    const { paymentAccessToken } = await completeBigCommerceCheckout({
      cartItems: CART_LINE_ITEMS,
      shippingAddress: MOCK_SHIPPING_ADDRESS,
    })
    const { result } = await completePayment({
      paymentInstrument: MOCK_PAYMENT_INSTRUMENT,
      paymentAccessToken: paymentAccessToken,
    })
    console.log(`Result from the payment: ${JSON.stringify(result)}`)
  }, [completeBigCommerceCheckout, completePayment])

  if (isCheckoutInProgress) {
    return <div>Loading....</div>
  }

  if (hasCheckoutError) {
    alert(`Checkout error...`)
  }

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="text-xl">Shop Checkout Page</div>
      <div>
        <button
          className={clsx(
            `p-3 w-40 rounded-md border
            border-blue-600 bg-blue-600
            text-white text-lg 
            hover:bg-white hover:text-blue-600`
          )}
          onClick={onClickHandler}
        >
          Complete Payment
        </button>
      </div>
    </div>
  )
}
