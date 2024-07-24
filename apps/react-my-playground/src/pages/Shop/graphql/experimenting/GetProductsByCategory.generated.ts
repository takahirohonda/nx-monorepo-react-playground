import * as Types from '../../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import { ProductDoc } from '../GetProducts.generated'
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
            productOptions: {
              __typename?: 'ProductOptionConnection'
              edges: Array<{
                __typename?: 'ProductOptionEdge'
                node:
                  | {
                      __typename: 'CheckboxOption'
                      entityId: number
                      displayName: string
                      isRequired: boolean
                    }
                  | {
                      __typename: 'DateFieldOption'
                      entityId: number
                      displayName: string
                      isRequired: boolean
                    }
                  | {
                      __typename: 'FileUploadFieldOption'
                      entityId: number
                      displayName: string
                      isRequired: boolean
                    }
                  | {
                      __typename: 'MultiLineTextFieldOption'
                      entityId: number
                      displayName: string
                      isRequired: boolean
                    }
                  | {
                      __typename: 'MultipleChoiceOption'
                      displayStyle: string
                      entityId: number
                      displayName: string
                      isRequired: boolean
                      values: {
                        __typename?: 'ProductOptionValueConnection'
                        edges: Array<{
                          __typename?: 'ProductOptionValueEdge'
                          node:
                            | {
                                __typename?: 'MultipleChoiceOptionValue'
                                entityId: number
                                label: string
                                isSelected: boolean | null
                                isDefault: boolean
                              }
                            | {
                                __typename?: 'ProductPickListOptionValue'
                                entityId: number
                                label: string
                                isSelected: boolean | null
                                isDefault: boolean
                              }
                            | {
                                __typename?: 'SwatchOptionValue'
                                hexColors: Array<string>
                                imageUrl: string | null
                                label: string
                                isSelected: boolean | null
                                entityId: number
                                isDefault: boolean
                              }
                        }> | null
                      }
                    }
                  | {
                      __typename: 'NumberFieldOption'
                      entityId: number
                      displayName: string
                      isRequired: boolean
                    }
                  | {
                      __typename: 'TextFieldOption'
                      entityId: number
                      displayName: string
                      isRequired: boolean
                    }
              }> | null
            }
            categories: {
              __typename?: 'CategoryConnection'
              edges: Array<{
                __typename?: 'CategoryEdge'
                node: {
                  __typename?: 'Category'
                  entityId: number
                  name: string
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
  query GetProductsCollection($entityId: Int!) {
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
  GetProductsCollectionQueryResponse,
  GetProductsCollectionQueryVariables
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
