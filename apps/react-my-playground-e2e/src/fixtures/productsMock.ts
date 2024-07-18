export const productsMock = {
  data: {
    site: {
      products: {
        edges: [
          {
            node: {
              entityId: 11,
              name: 'My product 1',
              sku: 'sku-1',
              plainTextDescription: 'description',
              defaultImage: {
                url320wide: 'image-url',
                altText: 'product 1',
                __typename: 'Image',
              },
              images: {
                edges: [],
                __typename: 'ImageConnection',
              },
              prices: {
                price: {
                  value: 99.0,
                  __typename: 'Money',
                },
                salePrice: {
                  value: 99.0,
                  __typename: 'Money',
                },
                __typename: 'Prices',
              },

              __typename: 'Product',
            },
            __typename: 'ProductEdge',
          },
          {
            node: {
              entityId: 12,
              name: 'My product 2',
              sku: 'sku-2',
              plainTextDescription: 'description',
              defaultImage: {
                url320wide: 'image-url',
                altText: 'product 1',
                __typename: 'Image',
              },
              images: {
                edges: [],
                __typename: 'ImageConnection',
              },
              prices: {
                price: {
                  value: 90.0,
                  __typename: 'Money',
                },
                salePrice: {
                  value: 90.0,
                  __typename: 'Money',
                },
                __typename: 'Prices',
              },

              __typename: 'Product',
            },
            __typename: 'ProductEdge',
          },
        ],
        __typename: 'ProductConnection',
      },
      __typename: 'Site',
    },
  },
}
