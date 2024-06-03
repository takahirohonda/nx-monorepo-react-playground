import { useCallback } from 'react'

export interface PaymentInstrument {
  number: string
  cardHolderName: string
  expiryMonth: number
  expiryYear: number
  verificationValue: number
}

export interface CompletePaymentArgs {
  paymentInstrument: PaymentInstrument
  paymentAccessToken: string
  paymentMethodId?: string
}

export const useCompletePayment = () => {
  const PAYMENT_URI = `https://payments.bigcommerce.com/stores/${import.meta.env.VITE_STORE_HASH}/payments`
  const completePayment = useCallback(
    async ({ paymentInstrument, paymentAccessToken }: CompletePaymentArgs) => {
      const {
        number,
        cardHolderName,
        expiryMonth,
        expiryYear,
        verificationValue,
      } = paymentInstrument
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `PAT ${paymentAccessToken}`,
        },
        body: JSON.stringify({
          payment: {
            instrument: {
              type: 'card',
              number,
              cardholder_name: cardHolderName,
              expiry_month: expiryMonth,
              expiry_year: expiryYear,
              verification_value: verificationValue,
            },
            // Need to set up the payment method in prod
            // payment_method_id: paymentMethodId,
          },
        }),
      }
      try {
        const response = await fetch(PAYMENT_URI, options)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const result = await response.json()
        return {
          result,
        }
      } catch (e) {
        throw new Error(`Payment error: ${e}`)
      }
    },
    [PAYMENT_URI]
  )

  return { completePayment }
}
