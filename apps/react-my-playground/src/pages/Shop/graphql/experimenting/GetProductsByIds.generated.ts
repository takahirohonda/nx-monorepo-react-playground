import * as Types from '../../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import { ProductAllFieldsDoc } from './ProductFields.generated'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetProductsByIdsQueryVariables = Types.Exact<{
  entityIds: Types.InputMaybe<
    Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']
  >
}>

export type GetProductsByIdsQueryResponse = {
  __typename?: 'Query'
  site: {
    __typename?: 'Site'
    products: {
      __typename?: 'ProductConnection'
      edges: Array<{
        __typename?: 'ProductEdge'
        node: {
          __typename?: 'Product'
          id: string
          entityId: number
          sku: string
          upc: string | null
          name: string
          plainTextDescription: string
          description: string
          path: string
          brand: { __typename?: 'Brand'; name: string } | null
          availabilityV2:
            | {
                __typename?: 'ProductAvailable'
                status: Types.ProductAvailabilityStatus
                description: string
              }
            | {
                __typename?: 'ProductPreOrder'
                status: Types.ProductAvailabilityStatus
                description: string
              }
            | {
                __typename?: 'ProductUnavailable'
                status: Types.ProductAvailabilityStatus
                description: string
              }
          defaultImage: {
            __typename?: 'Image'
            url320wide: string
            url640wide: string
            url960wide: string
            url1280wide: string
          } | null
          images: {
            __typename?: 'ImageConnection'
            edges: Array<{
              __typename?: 'ImageEdge'
              node: {
                __typename?: 'Image'
                url320wide: string
                url640wide: string
                url960wide: string
                url1280wide: string
              }
            }> | null
          }
          seo: {
            __typename?: 'SeoDetails'
            pageTitle: string
            metaDescription: string
            metaKeywords: string
          }
          prices: {
            __typename?: 'Prices'
            price: { __typename?: 'Money'; value: any; currencyCode: string }
            priceRange: {
              __typename?: 'MoneyRange'
              min: { __typename?: 'Money'; value: any; currencyCode: string }
              max: { __typename?: 'Money'; value: any; currencyCode: string }
            }
          } | null
          createdAt: { __typename?: 'DateTimeExtended'; utc: any }
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
        }
      }> | null
    }
  }
}

export const GetProductsByIds = gql`
  query GetProductsByIds($entityIds: [Int!]) {
    site {
      products(entityIds: $entityIds) {
        edges {
          node {
            ...ProductAllFields
          }
        }
      }
    }
  }
  ${ProductAllFieldsDoc}
` as unknown as TypedDocumentNode<
  GetProductsByIdsQueryResponse,
  GetProductsByIdsQueryVariables
>

/**
 * __useGetProductsByIdsQuery__
 *
 * To run a query within a React component, call `useGetProductsByIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsByIdsQuery({
 *   variables: {
 *      entityIds: // value for 'entityIds'
 *   },
 * });
 */
export function useGetProductsByIdsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductsByIdsQueryResponse,
    GetProductsByIdsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetProductsByIdsQueryResponse,
    GetProductsByIdsQueryVariables
  >(GetProductsByIds, options)
}
export function useGetProductsByIdsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductsByIdsQueryResponse,
    GetProductsByIdsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetProductsByIdsQueryResponse,
    GetProductsByIdsQueryVariables
  >(GetProductsByIds, options)
}
export function useGetProductsByIdsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetProductsByIdsQueryResponse,
    GetProductsByIdsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetProductsByIdsQueryResponse,
    GetProductsByIdsQueryVariables
  >(GetProductsByIds, options)
}
export type GetProductsByIdsQueryHookResult = ReturnType<
  typeof useGetProductsByIdsQuery
>
export type GetProductsByIdsLazyQueryHookResult = ReturnType<
  typeof useGetProductsByIdsLazyQuery
>
export type GetProductsByIdsSuspenseQueryHookResult = ReturnType<
  typeof useGetProductsByIdsSuspenseQuery
>
export type GetProductsByIdsQueryResult = Apollo.QueryResult<
  GetProductsByIdsQueryResponse,
  GetProductsByIdsQueryVariables
>
