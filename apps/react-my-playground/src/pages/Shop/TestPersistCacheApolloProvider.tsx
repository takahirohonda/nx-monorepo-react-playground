import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  from,
  ApolloProvider,
} from '@apollo/client'
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist'
import {
  customDataIdFromObject,
  possibleTypes,
} from '@libs/utils-apollo-provider'
import { ReactNode } from 'react'

const GRAPHQL_URI = import.meta.env.VITE_BIGCOMMERCE_GRAPHQL_URI
const API_TOKEN = import.meta.env.VITE_API_TOKEN

const httpLink = createHttpLink({ uri: GRAPHQL_URI, credentials: 'include' })

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: API_TOKEN ? `Bearer ${API_TOKEN}` : '',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  return forward(operation)
})

const cache = new InMemoryCache({
  possibleTypes,
  dataIdFromObject: customDataIdFromObject,
})

// await before instantiating ApolloClient, else queries might run before the cache is persisted
await persistCache({
  cache,
  storage: new LocalStorageWrapper(window.sessionStorage),
})

// Continue setting up Apollo as usual.

const client = new ApolloClient({
  link: from([authMiddleware, httpLink]),
  cache,
  connectToDevTools: true,
})

export const TestPersistCacheApolloProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
