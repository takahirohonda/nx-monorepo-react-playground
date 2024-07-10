## Configuring cache

`getProduct` query doesn't cache productOptions correctly. Therefore, `productOptions` look like this:

```json
"productOptions":{"__typename":"ProductOptionConnection","edges":[{"__typename":"ProductOptionEdge","node":{"__typename":"MultipleChoiceOption"}},{"__typename":"ProductOptionEdge","node":{"__typename":"MultipleChoiceOption"}}]}}}]
```

### Options

1. Creating a custom ID with typename and entityId for all the cases.

```ts
export const getCache = () =>
  new InMemoryCache({
    dataIdFromObject: (object) => {
      console.log('Cache Object:', object)
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
```

2. Adding a type policy specific to the typename.

```ts
export const getCache = () =>
  new InMemoryCache({
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
```

3. using specific typename

```ts
export const getCache = () =>
  new InMemoryCache({
    dataIdFromObject: (object) => {
      console.log('Cache Object:', object)
      switch (object.__typename) {
        case 'MultipleChoiceOption':
        case 'ProductPickListOptionValue':
        case 'Product':
          return `${object.__typename}:${object.entityId}`
        default:
          return defaultDataIdFromObject(object)
      }
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
```

4. merge...

```ts
export const getCache = () =>
  new InMemoryCache({
    typePolicies: {
      Product: {
        keyFields: ['entityId'],
      },
      MultipleChoiceOption: {
        keyFields: ['entityId'],
        fields: {
          values: {
            merge(existing, incoming, { mergeObjects }) {
              return mergeObjects(existing, incoming)
            },
          },
        },
      },
      ProductPickListOptionValue: {
        keyFields: ['entityId'],
        fields: {
          values: {
            merge(existing, incoming, { mergeObjects }) {
              return mergeObjects(existing, incoming)
            },
          },
        },
      },
    },
  })
```

5. just use entityId

```ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customDataIdFromObject = (object: any) => {
  // console.log('Cache Object:', object)
  if (object.entityId) {
    console.log(`Using entityId as key for ${object.__typename}: ${object.entityId}`)
    return `${object.__typename}:${object.entityId}`
  }
  return defaultDataIdFromObject(object)
}

export const getCache = () =>
  new InMemoryCache({
    dataIdFromObject: customDataIdFromObject,
  })
```

6. Use both `dataIdFromObject` and `typePolicies`

I think `typePolicies` will ignore the logic in `dataIdFromObject`? Because no console.log...

```ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customDataIdFromObject = (object: any) => {
  console.log('Cache Object:', object)
  if (object.entityId) {
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
```

7. Merging all the nested object

```ts
import { defaultDataIdFromObject, InMemoryCache } from '@apollo/client'

const checkMultipleChoiceOptionCachedObject = (object: any) => {
  // eslint-disable-next-line no-underscore-dangle
  if (object.__typename === 'MultipleChoiceOption') {
    console.log(`Checking the values in MultipleChoiceOption: ${JSON.stringify(object.values)}`)
  }

  // eslint-disable-next-line no-underscore-dangle
  if (object.__typename === 'ProductPickListOptionValue') {
    console.log(`Checking the values in ProductPickListOptionValue: ${JSON.stringify(object)}`)
  }
}

const customDataIdFromObject = (object: any) => {
  // console.log('Cache Object:', object)
  checkMultipleChoiceOptionCachedObject(object)
  if (object.entityId) {
    // eslint-disable-next-line no-underscore-dangle
    return `${object.__typename}:${object.entityId}`
  }
  return defaultDataIdFromObject(object)
}

export const getCache = () =>
  new InMemoryCache({
    dataIdFromObject: customDataIdFromObject,
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
      MultipleChoiceOption: {
        fields: {
          values: {
            merge(existing, incoming, { mergeObjects }) {
              return mergeObjects(existing, incoming)
            },
          },
        },
        keyFields: ['entityId'],
      },
      ProductOptionValueConnection: {
        fields: {
          edges: {
            merge(existing, incoming) {
              return incoming
            },
          },
        },
      },
      ProductOptionValueEdge: {
        fields: {
          node: {
            merge(existing, incoming, { mergeObjects }) {
              return mergeObjects(existing, incoming)
            },
          },
        },
      },
      ProductPickListOptionValue: {
        keyFields: ['entityId'],
      },
      Product: {
        keyFields: ['entityId'],
        fields: {
          images: {
            merge(existing, incoming, { mergeObjects }) {
              return mergeObjects(existing, incoming)
            },
          },
          productOptions: {
            merge(existing, incoming, { mergeObjects }) {
              return mergeObjects(existing, incoming)
            },
          },
        },
      },
    },
  })
```

8. Adding possible types - merge is not needed

```ts
import { defaultDataIdFromObject, InMemoryCache } from '@apollo/client'

const checkMultipleChoiceOptionCachedObject = (object: any) => {
  // eslint-disable-next-line no-underscore-dangle
  if (object.__typename === 'MultipleChoiceOption') {
    console.log(`Checking the values in MultipleChoiceOption: ${JSON.stringify(object.values)}`)
  }

  // eslint-disable-next-line no-underscore-dangle
  if (object.__typename === 'ProductPickListOptionValue') {
    console.log(`Checking the values in ProductPickListOptionValue: ${JSON.stringify(object)}`)
  }
}

const customDataIdFromObject = (object: any) => {
  // console.log('Cache Object:', object)
  checkMultipleChoiceOptionCachedObject(object)
  if (object.entityId) {
    // eslint-disable-next-line no-underscore-dangle
    return `${object.__typename}:${object.entityId}`
  }
  return defaultDataIdFromObject(object)
}

const possibleTypes = {
  CatalogProductOption: ['MultipleChoiceOption', 'NumberFieldOption', 'TextFieldOption', 'MultiLineTextFieldOption', 'FileUploadFieldOption', 'DateFieldOption', 'CheckboxOption'],
}

export const getCache = () =>
  new InMemoryCache({
    possibleTypes,
    dataIdFromObject: customDataIdFromObject,
  })
```
