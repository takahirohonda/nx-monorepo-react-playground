import * as Types from '../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import { ProductDoc } from './ProductFields.generated'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetProductsCollectionQueryVariables = Types.Exact<{
  entityId: Types.Scalars['Int']['input']
}>

export type GetProductsCollectionQueryResponse = {
  __typename?: 'Query'
  site: {
    __typename?: 'Site'
    category: {
      __typename?: 'Category'
      products: {
        __typename?: 'ProductConnection'
        edges: Array<{
          __typename?: 'ProductEdge'
          node: {
            __typename?: 'Product'
            entityId: number
            name: string
            plainTextDescription: string
            defaultImage: {
              __typename?: 'Image'
              url320wide: string
              url640wide: string
              url960wide: string
              url1280wide: string
            } | null
            prices: {
              __typename?: 'Prices'
              price: { __typename?: 'Money'; value: any; currencyCode: string }
            } | null
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
                    url320wide: string
                    url640wide: string
                    url960wide: string
                    url1280wide: string
                  } | null
                  prices: {
                    __typename?: 'Prices'
                    price: {
                      __typename?: 'Money'
                      value: any
                      currencyCode: string
                    }
                  } | null
                }
              }> | null
            }
          }
        }> | null
      }
    } | null
  }
}

export const GetProductsCollection = gql`
  query getProductsCollection($entityId: Int!) {
    site {
      category(entityId: $entityId) {
        products {
          edges {
            node {
              ...Product
            }
          }
        }
      }
    }
  }
  ${ProductDoc}
` as unknown as TypedDocumentNode<
  getProductsCollectionQueryResponse,
  getProductsCollectionQueryVariables
>

/**
 * __useGetProductsCollectionQuery__
 *
 * To run a query within a React component, call `useGetProductsCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsCollectionQuery({
 *   variables: {
 *      entityId: // value for 'entityId'
 *   },
 * });
 */
export function useGetProductsCollectionQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductsCollectionQueryResponse,
    GetProductsCollectionQueryVariables
  > &
    (
      | { variables: GetProductsCollectionQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetProductsCollectionQueryResponse,
    GetProductsCollectionQueryVariables
  >(GetProductsCollection, options)
}
export function useGetProductsCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductsCollectionQueryResponse,
    GetProductsCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetProductsCollectionQueryResponse,
    GetProductsCollectionQueryVariables
  >(GetProductsCollection, options)
}
export function useGetProductsCollectionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetProductsCollectionQueryResponse,
    GetProductsCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetProductsCollectionQueryResponse,
    GetProductsCollectionQueryVariables
  >(GetProductsCollection, options)
}
export type GetProductsCollectionQueryHookResult = ReturnType<
  typeof useGetProductsCollectionQuery
>
export type GetProductsCollectionLazyQueryHookResult = ReturnType<
  typeof useGetProductsCollectionLazyQuery
>
export type GetProductsCollectionSuspenseQueryHookResult = ReturnType<
  typeof useGetProductsCollectionSuspenseQuery
>
export type GetProductsCollectionQueryResult = Apollo.QueryResult<
  GetProductsCollectionQueryResponse,
  GetProductsCollectionQueryVariables
>
