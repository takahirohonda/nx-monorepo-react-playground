import { ApolloClient, ApolloLink, createHttpLink, from } from '@apollo/client'
import { cache } from './getCache'
import { createLazyLoadableLaikaLink } from '@zendesk/laika'
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist'

export const LAIKA_CLIENT_NAME = 'ecommerce'

export const getClient = async ({
  uri,
  token,
}: {
  uri: string
  token: string
}) => {
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

  await persistCache({
    cache,
    storage: new LocalStorageWrapper(window.sessionStorage),
  })

  return new ApolloClient({
    link: from([
      authMiddleware,
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
    cache,
    connectToDevTools: true,
  })
}
