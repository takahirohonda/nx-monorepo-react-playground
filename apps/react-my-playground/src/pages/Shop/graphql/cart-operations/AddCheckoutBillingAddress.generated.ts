import * as Types from '../../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type AddCheckoutBillingAddressMutationVariables = Types.Exact<{
  addCheckoutBillingAddressInput: Types.AddCheckoutBillingAddressInput
}>

export type AddCheckoutBillingAddressMutationResponse = {
  __typename?: 'Mutation'
  checkout: {
    __typename?: 'CheckoutMutations'
    addCheckoutBillingAddress: {
      __typename?: 'AddCheckoutBillingAddressResult'
      checkout: { __typename?: 'Checkout'; entityId: string } | null
    } | null
  }
}

export const AddCheckoutBillingAddress = gql`
  mutation AddCheckoutBillingAddress(
    $addCheckoutBillingAddressInput: AddCheckoutBillingAddressInput!
  ) {
    checkout {
      addCheckoutBillingAddress(input: $addCheckoutBillingAddressInput) {
        checkout {
          entityId
        }
      }
    }
  }
` as unknown as TypedDocumentNode<
  AddCheckoutBillingAddressMutationResponse,
  AddCheckoutBillingAddressMutationVariables
>
export type AddCheckoutBillingAddressMutationFn = Apollo.MutationFunction<
  AddCheckoutBillingAddressMutationResponse,
  AddCheckoutBillingAddressMutationVariables
>

/**
 * __useAddCheckoutBillingAddressMutation__
 *
 * To run a mutation, you first call `useAddCheckoutBillingAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCheckoutBillingAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCheckoutBillingAddressMutation, { data, loading, error }] = useAddCheckoutBillingAddressMutation({
 *   variables: {
 *      addCheckoutBillingAddressInput: // value for 'addCheckoutBillingAddressInput'
 *   },
 * });
 */
export function useAddCheckoutBillingAddressMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddCheckoutBillingAddressMutationResponse,
    AddCheckoutBillingAddressMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    AddCheckoutBillingAddressMutationResponse,
    AddCheckoutBillingAddressMutationVariables
  >(AddCheckoutBillingAddress, options)
}
export type AddCheckoutBillingAddressMutationHookResult = ReturnType<
  typeof useAddCheckoutBillingAddressMutation
>
export type AddCheckoutBillingAddressMutationResult =
  Apollo.MutationResult<AddCheckoutBillingAddressMutationResponse>
export type AddCheckoutBillingAddressMutationOptions =
  Apollo.BaseMutationOptions<
    AddCheckoutBillingAddressMutationResponse,
    AddCheckoutBillingAddressMutationVariables
  >
