import * as Types from '../../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type AddCheckoutShippingConsignmentsMutationVariables = Types.Exact<{
  addCheckoutShippingConsignmentsInput: Types.AddCheckoutShippingConsignmentsInput
}>

export type AddCheckoutShippingConsignmentsMutationResponse = {
  __typename?: 'Mutation'
  checkout: {
    __typename?: 'CheckoutMutations'
    addCheckoutShippingConsignments: {
      __typename?: 'AddCheckoutShippingConsignmentsResult'
      checkout: {
        __typename?: 'Checkout'
        entityId: string
        shippingConsignments: Array<{
          __typename?: 'CheckoutShippingConsignment'
          entityId: string
          availableShippingOptions: Array<{
            __typename?: 'CheckoutAvailableShippingOption'
            entityId: string
          }> | null
        }> | null
      } | null
    } | null
  }
}

export const AddCheckoutShippingConsignments = gql`
  mutation AddCheckoutShippingConsignments(
    $addCheckoutShippingConsignmentsInput: AddCheckoutShippingConsignmentsInput!
  ) {
    checkout {
      addCheckoutShippingConsignments(
        input: $addCheckoutShippingConsignmentsInput
      ) {
        checkout {
          entityId
          shippingConsignments {
            entityId
            availableShippingOptions {
              entityId
            }
          }
        }
      }
    }
  }
` as unknown as TypedDocumentNode<
  AddCheckoutShippingConsignmentsMutationResponse,
  AddCheckoutShippingConsignmentsMutationVariables
>
export type AddCheckoutShippingConsignmentsMutationFn = Apollo.MutationFunction<
  AddCheckoutShippingConsignmentsMutationResponse,
  AddCheckoutShippingConsignmentsMutationVariables
>

/**
 * __useAddCheckoutShippingConsignmentsMutation__
 *
 * To run a mutation, you first call `useAddCheckoutShippingConsignmentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCheckoutShippingConsignmentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCheckoutShippingConsignmentsMutation, { data, loading, error }] = useAddCheckoutShippingConsignmentsMutation({
 *   variables: {
 *      addCheckoutShippingConsignmentsInput: // value for 'addCheckoutShippingConsignmentsInput'
 *   },
 * });
 */
export function useAddCheckoutShippingConsignmentsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddCheckoutShippingConsignmentsMutationResponse,
    AddCheckoutShippingConsignmentsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    AddCheckoutShippingConsignmentsMutationResponse,
    AddCheckoutShippingConsignmentsMutationVariables
  >(AddCheckoutShippingConsignments, options)
}
export type AddCheckoutShippingConsignmentsMutationHookResult = ReturnType<
  typeof useAddCheckoutShippingConsignmentsMutation
>
export type AddCheckoutShippingConsignmentsMutationResult =
  Apollo.MutationResult<AddCheckoutShippingConsignmentsMutationResponse>
export type AddCheckoutShippingConsignmentsMutationOptions =
  Apollo.BaseMutationOptions<
    AddCheckoutShippingConsignmentsMutationResponse,
    AddCheckoutShippingConsignmentsMutationVariables
  >
