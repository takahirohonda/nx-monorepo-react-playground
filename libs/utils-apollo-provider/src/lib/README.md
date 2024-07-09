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
