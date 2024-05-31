import * as Types from '../../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
import { ImageDataDoc } from '../GetProducts.generated'
export type ProductVariantFieldsFragment = {
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

export type ProductWithVariantsFragment = {
  __typename?: 'Product'
  entityId: number
  name: string
  images: {
    __typename?: 'ImageConnection'
    edges: Array<{
      __typename?: 'ImageEdge'
      node: { __typename?: 'Image'; altText: string; url320wide: string }
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

export const ProductVariantFieldsDoc = gql`
  fragment ProductVariantFields on Variant {
    id
    entityId
    sku
    upc
    isPurchasable
    defaultImage {
      ...ImageData
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
  ${ImageDataDoc}
` as unknown as TypedDocumentNode<ProductVariantFieldsFragment, undefined>
export const ProductWithVariantsDoc = gql`
  fragment ProductWithVariants on Product {
    entityId
    name
    images {
      edges {
        node {
          ...ImageData
        }
      }
    }
    variants(first: 5) {
      edges {
        node {
          ...ProductVariantFields
        }
      }
    }
  }
  ${ImageDataDoc}
  ${ProductVariantFieldsDoc}
`
