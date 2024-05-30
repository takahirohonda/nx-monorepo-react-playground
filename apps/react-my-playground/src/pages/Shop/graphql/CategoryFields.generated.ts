import * as Types from '../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
export type CategoryFieldsFragment = {
  __typename?: 'CategoryTreeItem'
  name: string
  path: string
  entityId: number
}

export const CategoryFieldsDoc = gql`
  fragment CategoryFields on CategoryTreeItem {
    name
    path
    entityId
  }
` as unknown as TypedDocumentNode<CategoryFieldsFragment, undefined>
