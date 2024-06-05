import * as Types from '../../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetAllCartsQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetAllCartsQueryResponse = {
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

export const GetAllCarts = gql`
  query GetAllCarts {
    site {
      cart {
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
` as unknown as TypedDocumentNode<
  GetAllCartsQueryResponse,
  GetAllCartsQueryVariables
>

/**
 * __useGetAllCartsQuery__
 *
 * To run a query within a React component, call `useGetAllCartsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCartsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCartsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCartsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllCartsQueryResponse,
    GetAllCartsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllCartsQueryResponse, GetAllCartsQueryVariables>(
    GetAllCarts,
    options
  )
}
export function useGetAllCartsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllCartsQueryResponse,
    GetAllCartsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetAllCartsQueryResponse,
    GetAllCartsQueryVariables
  >(GetAllCarts, options)
}
export function useGetAllCartsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAllCartsQueryResponse,
    GetAllCartsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetAllCartsQueryResponse,
    GetAllCartsQueryVariables
  >(GetAllCarts, options)
}
export type GetAllCartsQueryHookResult = ReturnType<typeof useGetAllCartsQuery>
export type GetAllCartsLazyQueryHookResult = ReturnType<
  typeof useGetAllCartsLazyQuery
>
export type GetAllCartsSuspenseQueryHookResult = ReturnType<
  typeof useGetAllCartsSuspenseQuery
>
export type GetAllCartsQueryResult = Apollo.QueryResult<
  GetAllCartsQueryResponse,
  GetAllCartsQueryVariables
>
