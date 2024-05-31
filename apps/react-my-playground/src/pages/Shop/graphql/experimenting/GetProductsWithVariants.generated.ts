import * as Types from '../../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import { ProductWithVariantsDoc } from './ProductFields2.generated'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetProductsWithVariantsQueryVariables = Types.Exact<{
  pageSize: Types.Scalars['Int']['input']
}>

export type GetProductsWithVariantsQueryResponse = {
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

export const GetProductsWithVariants = gql`
  query GetProductsWithVariants($pageSize: Int!) {
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
  GetProductsWithVariantsQueryResponse,
  GetProductsWithVariantsQueryVariables
>

/**
 * __useGetProductsWithVariantsQuery__
 *
 * To run a query within a React component, call `useGetProductsWithVariantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsWithVariantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsWithVariantsQuery({
 *   variables: {
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useGetProductsWithVariantsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductsWithVariantsQueryResponse,
    GetProductsWithVariantsQueryVariables
  > &
    (
      | { variables: GetProductsWithVariantsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetProductsWithVariantsQueryResponse,
    GetProductsWithVariantsQueryVariables
  >(GetProductsWithVariants, options)
}
export function useGetProductsWithVariantsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductsWithVariantsQueryResponse,
    GetProductsWithVariantsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetProductsWithVariantsQueryResponse,
    GetProductsWithVariantsQueryVariables
  >(GetProductsWithVariants, options)
}
export function useGetProductsWithVariantsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetProductsWithVariantsQueryResponse,
    GetProductsWithVariantsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetProductsWithVariantsQueryResponse,
    GetProductsWithVariantsQueryVariables
  >(GetProductsWithVariants, options)
}
export type GetProductsWithVariantsQueryHookResult = ReturnType<
  typeof useGetProductsWithVariantsQuery
>
export type GetProductsWithVariantsLazyQueryHookResult = ReturnType<
  typeof useGetProductsWithVariantsLazyQuery
>
export type GetProductsWithVariantsSuspenseQueryHookResult = ReturnType<
  typeof useGetProductsWithVariantsSuspenseQuery
>
export type GetProductsWithVariantsQueryResult = Apollo.QueryResult<
  GetProductsWithVariantsQueryResponse,
  GetProductsWithVariantsQueryVariables
>
