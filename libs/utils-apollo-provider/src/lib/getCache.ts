import { defaultDataIdFromObject, InMemoryCache } from '@apollo/client'

export const getCache = () =>
  new InMemoryCache({
    dataIdFromObject: (object) => {
      // eslint-disable-next-line no-underscore-dangle
      const typename = object.__typename
      if (typename && typeof object.entityId === 'string') {
        return `${typename}:${object.entityId}`
      }

      return defaultDataIdFromObject(object)
    },
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
