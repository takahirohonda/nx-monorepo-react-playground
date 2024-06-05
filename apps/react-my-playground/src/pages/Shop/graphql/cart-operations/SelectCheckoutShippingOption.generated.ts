import * as Types from '../../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type SelectCheckoutShippingOptionMutationVariables = Types.Exact<{
  selectCheckoutShippingOptionInput: Types.SelectCheckoutShippingOptionInput
}>

export type SelectCheckoutShippingOptionMutationResponse = {
  __typename?: 'Mutation'
  checkout: {
    __typename?: 'CheckoutMutations'
    selectCheckoutShippingOption: {
      __typename?: 'SelectCheckoutShippingOptionResult'
      checkout: { __typename?: 'Checkout'; entityId: string } | null
    } | null
  }
}

export const SelectCheckoutShippingOption = gql`
  mutation SelectCheckoutShippingOption(
    $selectCheckoutShippingOptionInput: SelectCheckoutShippingOptionInput!
  ) {
    checkout {
      selectCheckoutShippingOption(input: $selectCheckoutShippingOptionInput) {
        checkout {
          entityId
        }
      }
    }
  }
` as unknown as TypedDocumentNode<
  SelectCheckoutShippingOptionMutationResponse,
  SelectCheckoutShippingOptionMutationVariables
>
export type SelectCheckoutShippingOptionMutationFn = Apollo.MutationFunction<
  SelectCheckoutShippingOptionMutationResponse,
  SelectCheckoutShippingOptionMutationVariables
>

/**
 * __useSelectCheckoutShippingOptionMutation__
 *
 * To run a mutation, you first call `useSelectCheckoutShippingOptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSelectCheckoutShippingOptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [selectCheckoutShippingOptionMutation, { data, loading, error }] = useSelectCheckoutShippingOptionMutation({
 *   variables: {
 *      selectCheckoutShippingOptionInput: // value for 'selectCheckoutShippingOptionInput'
 *   },
 * });
 */
export function useSelectCheckoutShippingOptionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SelectCheckoutShippingOptionMutationResponse,
    SelectCheckoutShippingOptionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    SelectCheckoutShippingOptionMutationResponse,
    SelectCheckoutShippingOptionMutationVariables
  >(SelectCheckoutShippingOption, options)
}
export type SelectCheckoutShippingOptionMutationHookResult = ReturnType<
  typeof useSelectCheckoutShippingOptionMutation
>
export type SelectCheckoutShippingOptionMutationResult =
  Apollo.MutationResult<SelectCheckoutShippingOptionMutationResponse>
export type SelectCheckoutShippingOptionMutationOptions =
  Apollo.BaseMutationOptions<
    SelectCheckoutShippingOptionMutationResponse,
    SelectCheckoutShippingOptionMutationVariables
  >
