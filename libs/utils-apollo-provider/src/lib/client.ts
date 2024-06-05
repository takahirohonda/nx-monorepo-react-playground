import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  concat,
  createHttpLink,
} from '@apollo/client'
// import { setContext } from '@apollo/client/link/context';

export const getClient = ({ uri, token }: { uri: string; token: string }) => {
  const httpLink = createHttpLink({ uri })

  // const httpLink = createHttpLink({ uri, fetchOptions: {
  //   mode: 'no-cors'
  // }})

  // const authLink = setContext((_, { headers }) => {
  //   return {
  //     headers: {
  //       ...headers,

  //       authorization: token ? `Bearer ${token}` : "",
  //       credential: 'same-origin',
  //     }
  //   }
  // })

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
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
