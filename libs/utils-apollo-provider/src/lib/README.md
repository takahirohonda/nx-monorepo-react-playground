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
