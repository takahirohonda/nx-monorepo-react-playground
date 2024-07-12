import { useCallback, useState } from 'react'
import {
  CartLineItemInput,
  CheckoutAddressInput,
} from '../../../types/gql-global-types'

import { useGetCart } from './cart-operations/useGetCart'
import { useDeleteCart } from './cart-operations/deleteCart'
import { UNEXPECTED_ERROR } from '../../const/error'

export interface CompleteBigCommerceCheckoutArgs {
  cartItems: CartLineItemInput[]
  shippingAddress: CheckoutAddressInput
}

export const useDeleteExistingCart = () => {
  const [isDeleteCartInProgress, setIsDeleteCartInProgress] = useState(false)
  const [hasDeleteCartError, setHasDeleteCartError] = useState(false)
  const { getCart } = useGetCart()
  const { deleteCart } = useDeleteCart()

  const deleteExistingCart = useCallback(async () => {
    setIsDeleteCartInProgress(true)
    try {
      const { existingCartEntityId } = await getCart()

      if (existingCartEntityId) {
        console.log(`Cart exits: ${existingCartEntityId}`)
        const deleteCartResponse = await deleteCart({
          cartEntityId: existingCartEntityId,
        })
        setIsDeleteCartInProgress(false)
        // todo: refine this
        return deleteCartResponse
      }

      setIsDeleteCartInProgress(false)
      return 'No existing cart'
    } catch (e) {
      console.log(`completeBigCommerceCheckout error: ${e}`)
      setIsDeleteCartInProgress(false)
      setHasDeleteCartError(true)
    }
    return UNEXPECTED_ERROR
  }, [deleteCart, getCart])

  return {
    deleteExistingCart,
    isDeleteCartInProgress,
    hasDeleteCartError,
  }
}
