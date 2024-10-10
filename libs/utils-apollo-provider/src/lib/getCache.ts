import { defaultDataIdFromObject, gql, InMemoryCache } from '@apollo/client'

export const possibleTypes = {
  CatalogProductOption: [
    'MultipleChoiceOption',
    'NumberFieldOption',
    'TextFieldOption',
    'MultiLineTextFieldOption',
    'FileUploadFieldOption',
    'DateFieldOption',
    'CheckboxOption',
  ],
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const customDataIdFromObject = (object: any) => {
  if (object.entityId && object.__typename) {
    return `${object.__typename}:${object.entityId}`
  }
  return defaultDataIdFromObject(object)
}

export const cache = new InMemoryCache({
  possibleTypes,
  dataIdFromObject: customDataIdFromObject,
})

// this doesn't work... we need to it per query...

// cache.watch({
//   callback: (diff) => {
//     console.log(`checking data in cahce.watch: ${JSON.stringify(data)}`)
//   },
// })

cache.watch({
  query: gql`
    query RetrieveEntityOnboardingDetails($id: ID!) {
      retrieveEntityOnboardingDetails(id: $id) {
        entityUuid
        __typename
      }
    }
  `,
  variables: { id: 'some-id' }, // Adjust the variables as per your needs
  optimistic: false, // Optional: Depends on whether you want optimistic results or not
  callback: (diff) => {
    console.log(`checking data in cache.watch: ${JSON.stringify(diff)}`)
  },
})
