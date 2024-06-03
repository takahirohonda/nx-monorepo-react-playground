import * as Types from '../../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateCartMutationVariables = Types.Exact<{
  createCartInput: Types.CreateCartInput
}>

export type CreateCartMutationResponse = {
  __typename?: 'Mutation'
  cart: {
    __typename?: 'CartMutations'
    createCart: {
      __typename?: 'CreateCartResult'
      cart: {
        __typename?: 'Cart'
        entityId: string
        lineItems: {
          __typename?: 'CartLineItems'
          physicalItems: Array<{
            __typename?: 'CartPhysicalItem'
            entityId: string
            quantity: number
          }>
        }
      } | null
    } | null
  }
}

export const CreateCart = gql`
  mutation CreateCart($createCartInput: CreateCartInput!) {
    cart {
      createCart(input: $createCartInput) {
        cart {
          entityId
          lineItems {
            physicalItems {
              entityId
              quantity
            }
          }
        }
      }
    }
  }
` as unknown as TypedDocumentNode<
  CreateCartMutationResponse,
  CreateCartMutationVariables
>
export type CreateCartMutationFn = Apollo.MutationFunction<
  CreateCartMutationResponse,
  CreateCartMutationVariables
>

/**
 * __useCreateCartMutation__
 *
 * To run a mutation, you first call `useCreateCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCartMutation, { data, loading, error }] = useCreateCartMutation({
 *   variables: {
 *      createCartInput: // value for 'createCartInput'
 *   },
 * });
 */
export function useCreateCartMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCartMutationResponse,
    CreateCartMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateCartMutationResponse,
    CreateCartMutationVariables
  >(CreateCart, options)
}
export type CreateCartMutationHookResult = ReturnType<
  typeof useCreateCartMutation
>
export type CreateCartMutationResult =
  Apollo.MutationResult<CreateCartMutationResponse>
export type CreateCartMutationOptions = Apollo.BaseMutationOptions<
  CreateCartMutationResponse,
  CreateCartMutationVariables
>
