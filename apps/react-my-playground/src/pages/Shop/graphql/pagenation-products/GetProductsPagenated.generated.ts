import * as Types from '../../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetPagenatedProductsQueryVariables = Types.Exact<{
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>
  cursor: Types.InputMaybe<Types.Scalars['String']['input']>
}>

export type GetPagenatedProductsQueryResponse = {
  __typename?: 'Query'
  site: {
    __typename?: 'Site'
    products: {
      __typename?: 'ProductConnection'
      pageInfo: {
        __typename?: 'PageInfo'
        startCursor: string | null
        endCursor: string | null
      }
      edges: Array<{
        __typename?: 'ProductEdge'
        cursor: string
        node: {
          __typename?: 'Product'
          entityId: number
          name: string
          sku: string
          plainTextDescription: string
          defaultImage: {
            __typename?: 'Image'
            altText: string
            url320wide: string
          } | null
          images: {
            __typename?: 'ImageConnection'
            edges: Array<{
              __typename?: 'ImageEdge'
              node: {
                __typename?: 'Image'
                altText: string
                url320wide: string
              }
            }> | null
          }
          prices: {
            __typename?: 'Prices'
            price: { __typename?: 'Money'; value: any }
            salePrice: { __typename?: 'Money'; value: any } | null
          } | null
        }
      }> | null
    }
  }
}

export const GetPagenatedProducts = gql`
  query GetPagenatedProducts($pageSize: Int = 10, $cursor: String) {
    site {
      products(first: $pageSize, after: $cursor) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            entityId
            name
            sku
            plainTextDescription
            defaultImage {
              url320wide: url(width: 320)
              altText
            }
            images {
              edges {
                node {
                  url320wide: url(width: 320)
                  altText
                }
              }
            }
            prices {
              price {
                value
              }
              salePrice {
                value
              }
            }
          }
        }
      }
    }
  }
` as unknown as TypedDocumentNode<
  GetPagenatedProductsQueryResponse,
  GetPagenatedProductsQueryVariables
>

/**
 * __useGetPagenatedProductsQuery__
 *
 * To run a query within a React component, call `useGetPagenatedProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPagenatedProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPagenatedProductsQuery({
 *   variables: {
 *      pageSize: // value for 'pageSize'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useGetPagenatedProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPagenatedProductsQueryResponse,
    GetPagenatedProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetPagenatedProductsQueryResponse,
    GetPagenatedProductsQueryVariables
  >(GetPagenatedProducts, options)
}
export function useGetPagenatedProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPagenatedProductsQueryResponse,
    GetPagenatedProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetPagenatedProductsQueryResponse,
    GetPagenatedProductsQueryVariables
  >(GetPagenatedProducts, options)
}
export function useGetPagenatedProductsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetPagenatedProductsQueryResponse,
    GetPagenatedProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetPagenatedProductsQueryResponse,
    GetPagenatedProductsQueryVariables
  >(GetPagenatedProducts, options)
}
export type GetPagenatedProductsQueryHookResult = ReturnType<
  typeof useGetPagenatedProductsQuery
>
export type GetPagenatedProductsLazyQueryHookResult = ReturnType<
  typeof useGetPagenatedProductsLazyQuery
>
export type GetPagenatedProductsSuspenseQueryHookResult = ReturnType<
  typeof useGetPagenatedProductsSuspenseQuery
>
export type GetPagenatedProductsQueryResult = Apollo.QueryResult<
  GetPagenatedProductsQueryResponse,
  GetPagenatedProductsQueryVariables
>
