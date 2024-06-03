import * as Types from '../../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CompleteCheckoutMutationVariables = Types.Exact<{
  completeCheckoutInput: Types.CompleteCheckoutInput
}>

export type CompleteCheckoutMutationResponse = {
  __typename?: 'Mutation'
  checkout: {
    __typename?: 'CheckoutMutations'
    completeCheckout: {
      __typename?: 'CompleteCheckoutResult'
      orderEntityId: number | null
      paymentAccessToken: string | null
    } | null
  }
}

export const CompleteCheckout = gql`
  mutation CompleteCheckout($completeCheckoutInput: CompleteCheckoutInput!) {
    checkout {
      completeCheckout(input: $completeCheckoutInput) {
        orderEntityId
        paymentAccessToken
      }
    }
  }
` as unknown as TypedDocumentNode<
  CompleteCheckoutMutationResponse,
  CompleteCheckoutMutationVariables
>
export type CompleteCheckoutMutationFn = Apollo.MutationFunction<
  CompleteCheckoutMutationResponse,
  CompleteCheckoutMutationVariables
>

/**
 * __useCompleteCheckoutMutation__
 *
 * To run a mutation, you first call `useCompleteCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeCheckoutMutation, { data, loading, error }] = useCompleteCheckoutMutation({
 *   variables: {
 *      completeCheckoutInput: // value for 'completeCheckoutInput'
 *   },
 * });
 */
export function useCompleteCheckoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CompleteCheckoutMutationResponse,
    CompleteCheckoutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CompleteCheckoutMutationResponse,
    CompleteCheckoutMutationVariables
  >(CompleteCheckout, options)
}
export type CompleteCheckoutMutationHookResult = ReturnType<
  typeof useCompleteCheckoutMutation
>
export type CompleteCheckoutMutationResult =
  Apollo.MutationResult<CompleteCheckoutMutationResponse>
export type CompleteCheckoutMutationOptions = Apollo.BaseMutationOptions<
  CompleteCheckoutMutationResponse,
  CompleteCheckoutMutationVariables
>
