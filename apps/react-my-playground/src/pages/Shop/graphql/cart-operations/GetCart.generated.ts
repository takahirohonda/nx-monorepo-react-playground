import * as Types from '../../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetCartQueryVariables = Types.Exact<{
  entityId: Types.InputMaybe<Types.Scalars['String']['input']>
}>

export type GetCartQueryResponse = {
  __typename?: 'Query'
  site: {
    __typename?: 'Site'
    cart: {
      __typename?: 'Cart'
      entityId: string
      lineItems: {
        __typename?: 'CartLineItems'
        physicalItems: Array<{
          __typename?: 'CartPhysicalItem'
          name: string
          quantity: number
        }>
      }
    } | null
  }
}

export const GetCart = gql`
  query getCart($entityId: String) {
    site {
      cart(entityId: $entityId) {
        entityId
        lineItems {
          physicalItems {
            name
            quantity
          }
        }
      }
    }
  }
` as unknown as TypedDocumentNode<getCartQueryResponse, getCartQueryVariables>

/**
 * __useGetCartQuery__
 *
 * To run a query within a React component, call `useGetCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartQuery({
 *   variables: {
 *      entityId: // value for 'entityId'
 *   },
 * });
 */
export function useGetCartQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCartQueryResponse,
    GetCartQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCartQueryResponse, GetCartQueryVariables>(
    GetCart,
    options
  )
}
export function useGetCartLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCartQueryResponse,
    GetCartQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCartQueryResponse, GetCartQueryVariables>(
    GetCart,
    options
  )
}
export function useGetCartSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetCartQueryResponse,
    GetCartQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetCartQueryResponse, GetCartQueryVariables>(
    GetCart,
    options
  )
}
export type GetCartQueryHookResult = ReturnType<typeof useGetCartQuery>
export type GetCartLazyQueryHookResult = ReturnType<typeof useGetCartLazyQuery>
export type GetCartSuspenseQueryHookResult = ReturnType<
  typeof useGetCartSuspenseQuery
>
export type GetCartQueryResult = Apollo.QueryResult<
  GetCartQueryResponse,
  GetCartQueryVariables
>
