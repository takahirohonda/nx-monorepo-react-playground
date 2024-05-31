import * as Types from '../../../../types/gql-global-types'

import { gql, type TypedDocumentNode } from '@apollo/client'
export type ProductOption_CheckboxOption_Fragment = {
  __typename: 'CheckboxOption'
  entityId: number
  displayName: string
  isRequired: boolean
}

export type ProductOption_DateFieldOption_Fragment = {
  __typename: 'DateFieldOption'
  entityId: number
  displayName: string
  isRequired: boolean
}

export type ProductOption_FileUploadFieldOption_Fragment = {
  __typename: 'FileUploadFieldOption'
  entityId: number
  displayName: string
  isRequired: boolean
}

export type ProductOption_MultiLineTextFieldOption_Fragment = {
  __typename: 'MultiLineTextFieldOption'
  entityId: number
  displayName: string
  isRequired: boolean
}

export type ProductOption_MultipleChoiceOption_Fragment = {
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

export type ProductOption_NumberFieldOption_Fragment = {
  __typename: 'NumberFieldOption'
  entityId: number
  displayName: string
  isRequired: boolean
}

export type ProductOption_TextFieldOption_Fragment = {
  __typename: 'TextFieldOption'
  entityId: number
  displayName: string
  isRequired: boolean
}

export type ProductOptionFragment =
  | ProductOption_CheckboxOption_Fragment
  | ProductOption_DateFieldOption_Fragment
  | ProductOption_FileUploadFieldOption_Fragment
  | ProductOption_MultiLineTextFieldOption_Fragment
  | ProductOption_MultipleChoiceOption_Fragment
  | ProductOption_NumberFieldOption_Fragment
  | ProductOption_TextFieldOption_Fragment

export type ProductVariantAllFieldsFragment = {
  __typename?: 'Variant'
  id: string
  entityId: number
  sku: string
  upc: string | null
  isPurchasable: boolean
  prices: {
    __typename?: 'Prices'
    price: { __typename?: 'Money'; value: any; currencyCode: string }
    priceRange: {
      __typename?: 'MoneyRange'
      min: { __typename?: 'Money'; value: any; currencyCode: string }
      max: { __typename?: 'Money'; value: any; currencyCode: string }
    }
  } | null
  options: {
    __typename?: 'OptionConnection'
    edges: Array<{
      __typename?: 'OptionEdge'
      node: {
        __typename?: 'ProductOption'
        entityId: number
        displayName: string
        values: {
          __typename?: 'OptionValueConnection'
          edges: Array<{
            __typename?: 'OptionValueEdge'
            node: {
              __typename?: 'ProductOptionValue'
              entityId: number
              label: string
            }
          }> | null
        }
      }
    }> | null
  }
}

export type ProductVariantFragment = {
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
    price: { __typename?: 'Money'; value: any; currencyCode: string }
  } | null
}

export type ProductAllFieldsFragment = {
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
          price: { __typename?: 'Money'; value: any; currencyCode: string }
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

export type ImageFieldsSmallFragment = {
  __typename?: 'Image'
  url320wide: string
}

export type ImageFieldsFragment = {
  __typename?: 'Image'
  url320wide: string
  url640wide: string
  url960wide: string
  url1280wide: string
}

export type MoneyFieldsFragment = {
  __typename?: 'Money'
  value: any
  currencyCode: string
}

export const ProductVariantAllFieldsDoc = gql`
  fragment ProductVariantAllFields on Variant {
    id
    entityId
    sku
    upc
    isPurchasable
    prices {
      price {
        value
        currencyCode
      }
      priceRange {
        min {
          value
          currencyCode
        }
        max {
          value
          currencyCode
        }
      }
    }
    options(first: 5) {
      edges {
        node {
          entityId
          displayName
          values(first: 5) {
            edges {
              node {
                entityId
                label
              }
            }
          }
        }
      }
    }
  }
` as unknown as TypedDocumentNode<ProductVariantAllFieldsFragment, undefined>
export const ImageFieldsDoc = gql`
  fragment ImageFields on Image {
    url320wide: url(width: 320)
    url640wide: url(width: 640)
    url960wide: url(width: 960)
    url1280wide: url(width: 1280)
  }
`
export const MoneyFieldsDoc = gql`
  fragment MoneyFields on Money {
    value
    currencyCode
  }
`
export const ProductVariantDoc = gql`
  fragment ProductVariant on Variant {
    id
    entityId
    sku
    upc
    isPurchasable
    defaultImage {
      ...ImageFields
    }
    prices {
      price {
        value
        currencyCode
      }
    }
  }
  ${ImageFieldsDoc}
`
export const ProductOptionDoc = gql`
  fragment ProductOption on CatalogProductOption {
    __typename
    entityId
    displayName
    isRequired
    ... on MultipleChoiceOption {
      displayStyle
      values(first: 5) {
        edges {
          node {
            entityId
            isDefault
            ... on SwatchOptionValue {
              hexColors
              imageUrl(width: 200)
              label
              isSelected
            }
            ... on MultipleChoiceOptionValue {
              entityId
              label
              isSelected
            }
            ... on ProductPickListOptionValue {
              entityId
              label
              isSelected
            }
          }
        }
      }
    }
    ... on NumberFieldOption {
      entityId
      displayName
    }
    ... on TextFieldOption {
      entityId
      displayName
    }
    ... on MultiLineTextFieldOption {
      entityId
      displayName
    }
    ... on FileUploadFieldOption {
      entityId
      displayName
    }
    ... on DateFieldOption {
      entityId
      displayName
    }
    ... on CheckboxOption {
      entityId
      displayName
    }
  }
`
export const ProductAllFieldsDoc = gql`
  fragment ProductAllFields on Product {
    id
    entityId
    sku
    upc
    name
    brand {
      name
    }
    plainTextDescription
    description
    availabilityV2 {
      status
      description
    }
    defaultImage {
      ...ImageFields
    }
    images {
      edges {
        node {
          ...ImageFields
        }
      }
    }
    seo {
      pageTitle
      metaDescription
      metaKeywords
    }
    path
    prices {
      price {
        ...MoneyFields
      }
      priceRange {
        min {
          ...MoneyFields
        }
        max {
          ...MoneyFields
        }
      }
    }
    createdAt {
      utc
    }
    variants(first: 5) {
      edges {
        node {
          ...ProductVariant
        }
      }
    }
    productOptions(first: 3) {
      edges {
        node {
          ...ProductOption
        }
      }
    }
  }
  ${ImageFieldsDoc}
  ${MoneyFieldsDoc}
  ${ProductVariantDoc}
  ${ProductOptionDoc}
`
export const ImageFieldsSmallDoc = gql`
  fragment ImageFieldsSmall on Image {
    url320wide: url(width: 320)
  }
`
