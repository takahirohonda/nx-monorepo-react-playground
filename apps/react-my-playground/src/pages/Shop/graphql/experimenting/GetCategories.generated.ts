import * as Types from '../../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import { CategoryFieldsDoc } from './CategoryFields.generated'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetCategoriesQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetCategoriesQueryResponse = {
  __typename?: 'Query'
  site: {
    __typename?: 'Site'
    categoryTree: Array<{
      __typename?: 'CategoryTreeItem'
      name: string
      path: string
      entityId: number
      children: Array<{
        __typename?: 'CategoryTreeItem'
        name: string
        path: string
        entityId: number
      }>
    }>
  }
}

export const GetCategories = gql`
  query GetCategories {
    site {
      categoryTree {
        ...CategoryFields
        children {
          ...CategoryFields
        }
      }
    }
  }
  ${CategoryFieldsDoc}
` as unknown as TypedDocumentNode<
  GetCategoriesQueryResponse,
  GetCategoriesQueryVariables
>

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCategoriesQueryResponse,
    GetCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetCategoriesQueryResponse,
    GetCategoriesQueryVariables
  >(GetCategories, options)
}
export function useGetCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCategoriesQueryResponse,
    GetCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetCategoriesQueryResponse,
    GetCategoriesQueryVariables
  >(GetCategories, options)
}
export function useGetCategoriesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetCategoriesQueryResponse,
    GetCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetCategoriesQueryResponse,
    GetCategoriesQueryVariables
  >(GetCategories, options)
}
export type GetCategoriesQueryHookResult = ReturnType<
  typeof useGetCategoriesQuery
>
export type GetCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetCategoriesLazyQuery
>
export type GetCategoriesSuspenseQueryHookResult = ReturnType<
  typeof useGetCategoriesSuspenseQuery
>
export type GetCategoriesQueryResult = Apollo.QueryResult<
  GetCategoriesQueryResponse,
  GetCategoriesQueryVariables
>
