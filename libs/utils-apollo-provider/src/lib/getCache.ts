import { defaultDataIdFromObject, InMemoryCache } from '@apollo/client'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customDataIdFromObject = (object: any) => {
  // console.log('Cache Object:', object)
  if (object.entityId) {
    console.log(
      `Using entityId as key for ${object.__typename}: ${object.entityId}`
    )
    return `${object.__typename}:${object.entityId}`
  }
  return defaultDataIdFromObject(object)
}

export const getCache = () =>
  new InMemoryCache({
    dataIdFromObject: customDataIdFromObject,
    typePolicies: {
      Product: {
        keyFields: ['entityId'],
      },
      MultipleChoiceOption: {
        keyFields: ['entityId'],
      },
      ProductPickListOptionValue: {
        keyFields: ['entityId'],
      },
      Image: {
        keyFields: false,
      },
    },
  })
