import { useState } from 'react'
import { ShopContent } from './ShopContent'
import { CheckoutContent } from './CheckoutContent'

export const ShopPage = () => {
  const [hasCheckedOut, setHasCheckedOut] = useState(false)

  return (
    <div>
      {hasCheckedOut ? (
        <CheckoutContent />
      ) : (
        <ShopContent setHasCheckedOut={setHasCheckedOut} />
      )}
    </div>
  )
}
