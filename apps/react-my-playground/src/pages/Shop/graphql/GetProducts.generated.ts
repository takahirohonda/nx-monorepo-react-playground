import * as Types from '../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import { ProductWithVariantsDoc } from './ProductFields2.generated'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetProductsQueryVariables = Types.Exact<{
  pageSize: Types.Scalars['Int']['input']
}>

export type GetProductsQueryResponse = {
  __typename?: 'Query'
  site: {
    __typename?: 'Site'
    products: {
      __typename?: 'ProductConnection'
      edges: Array<{
        __typename?: 'ProductEdge'
        node: {
          __typename?: 'Product'
          entityId: number
          name: string
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
          variants: {
            __typename?: 'VariantConnection'
            edges: Array<{
              __typename?: 'VariantEdge'
              node: {
                __typename?: 'Variant'
                id: string
                entityId: number
                sku: string
                upc: string | null
                isPurchasable: boolean
                defaultImage: {
                  __typename?: 'Image'
                  altText: string
                  url320wide: string
                } | null
                prices: {
                  __typename?: 'Prices'
                  price: { __typename?: 'Money'; value: any }
                  salePrice: { __typename?: 'Money'; value: any } | null
                } | null
              }
            }> | null
          }
        }
      }> | null
    }
  }
}

export const GetProducts = gql`
  query GetProducts($pageSize: Int!) {
    site {
      products(first: $pageSize) {
        edges {
          node {
            ...ProductWithVariants
          }
        }
      }
    }
  }
  ${ProductWithVariantsDoc}
` as unknown as TypedDocumentNode<
  GetProductsQueryResponse,
  GetProductsQueryVariables
>

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useGetProductsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductsQueryResponse,
    GetProductsQueryVariables
  > &
    (
      | { variables: GetProductsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductsQueryResponse, GetProductsQueryVariables>(
    GetProducts,
    options
  )
}
export function useGetProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductsQueryResponse,
    GetProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetProductsQueryResponse,
    GetProductsQueryVariables
  >(GetProducts, options)
}
export function useGetProductsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetProductsQueryResponse,
    GetProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetProductsQueryResponse,
    GetProductsQueryVariables
  >(GetProducts, options)
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>
export type GetProductsLazyQueryHookResult = ReturnType<
  typeof useGetProductsLazyQuery
>
export type GetProductsSuspenseQueryHookResult = ReturnType<
  typeof useGetProductsSuspenseQuery
>
export type GetProductsQueryResult = Apollo.QueryResult<
  GetProductsQueryResponse,
  GetProductsQueryVariables
>
