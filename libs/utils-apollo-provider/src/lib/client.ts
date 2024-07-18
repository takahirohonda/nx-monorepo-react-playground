import { ApolloClient, ApolloLink, createHttpLink, from } from '@apollo/client'
import { getCache } from './getCache'
import { createLazyLoadableLaikaLink } from '@zendesk/laika'

export const LAIKA_CLIENT_NAME = 'ecommerce'

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const optionalLinks = () =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    window.Cypress
      ? [
          createLazyLoadableLaikaLink({
            clientName: 'dashboard',
            startLoggingImmediately: true,
          }),
        ]
      : []

  // https://zendesk.github.io/laika/docs/how-to-install
  // Loading laika for whatever environment for now...
  // can be updated as optionalLink above
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const laikaLink = createLazyLoadableLaikaLink({
    clientName: LAIKA_CLIENT_NAME,
    startLoggingImmediately: true,
  })

  return new ApolloClient({
    link: from([
      authMiddleware,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      ...(window.Cypress
        ? [
            createLazyLoadableLaikaLink({
              clientName: LAIKA_CLIENT_NAME,
              startLoggingImmediately: true,
            }),
          ]
        : []),
      httpLink,
    ]),
    cache: getCache(),
    connectToDevTools: true,
  })
}
