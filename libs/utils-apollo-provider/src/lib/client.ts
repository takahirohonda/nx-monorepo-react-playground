import { ApolloClient, ApolloLink, createHttpLink, from } from '@apollo/client'
import { getCache } from './getCache'
import { createLazyLoadableLaikaLink } from '@zendesk/laika'

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

  // const optionalLinks = () =>
  //   window.Cypress
  //     ? [
  //         createLazyLoadableLaikaLink({
  //           clientName: 'dashboard',
  //           startLoggingImmediately: true,
  //         }),
  //       ]
  //     : []

  // https://zendesk.github.io/laika/docs/how-to-install
  // Loading laika for whatever environment for now...
  // can be updated as optionalLink above
  const laikaLink = createLazyLoadableLaikaLink({
    clientName: 'dashboard',
    startLoggingImmediately: true,
  })

  return new ApolloClient({
    link: from([authMiddleware, laikaLink, httpLink]),
    cache: getCache(),
    connectToDevTools: true,
  })
}
