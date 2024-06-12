import * as Types from '../../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type DeleteCartMutationVariables = Types.Exact<{
  deleteCartInput: Types.DeleteCartInput
}>

export type DeleteCartMutationResponse = {
  __typename?: 'Mutation'
  cart: {
    __typename?: 'CartMutations'
    deleteCart: {
      __typename?: 'DeleteCartResult'
      deletedCartEntityId: string | null
    } | null
  }
}

export const DeleteCart = gql`
  mutation DeleteCart($deleteCartInput: DeleteCartInput!) {
    cart {
      deleteCart(input: $deleteCartInput) {
        deletedCartEntityId
      }
    }
  }
` as unknown as TypedDocumentNode<
  DeleteCartMutationResponse,
  DeleteCartMutationVariables
>
export type DeleteCartMutationFn = Apollo.MutationFunction<
  DeleteCartMutationResponse,
  DeleteCartMutationVariables
>

/**
 * __useDeleteCartMutation__
 *
 * To run a mutation, you first call `useDeleteCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCartMutation, { data, loading, error }] = useDeleteCartMutation({
 *   variables: {
 *      deleteCartInput: // value for 'deleteCartInput'
 *   },
 * });
 */
export function useDeleteCartMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCartMutationResponse,
    DeleteCartMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteCartMutationResponse,
    DeleteCartMutationVariables
  >(DeleteCart, options)
}
export type DeleteCartMutationHookResult = ReturnType<
  typeof useDeleteCartMutation
>
export type DeleteCartMutationResult =
  Apollo.MutationResult<DeleteCartMutationResponse>
export type DeleteCartMutationOptions = Apollo.BaseMutationOptions<
  DeleteCartMutationResponse,
  DeleteCartMutationVariables
>
