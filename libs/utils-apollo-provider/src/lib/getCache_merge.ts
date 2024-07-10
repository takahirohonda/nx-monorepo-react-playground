import { InMemoryCache } from '@apollo/client'

export const getCache = () =>
  new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          site: {
            merge(existing, incoming, { mergeObjects }) {
              return mergeObjects(existing, incoming)
            },
          },
        },
      },
    },
  })
