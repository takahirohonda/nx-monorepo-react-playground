import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  concat,
  createHttpLink,
} from '@apollo/client'
// import { setContext } from '@apollo/client/link/context';

export const getClient = ({ uri, token }: { uri: string; token: string }) => {
  const httpLink = createHttpLink({ uri, credentials: 'include' })

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    return forward(operation)
  })

  console.log(`checking token: ${token}`)

  return new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
  })
}
