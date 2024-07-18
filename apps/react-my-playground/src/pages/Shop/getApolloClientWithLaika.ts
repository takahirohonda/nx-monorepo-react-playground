import { ApolloClient, from, InMemoryCache } from '@apollo/client'
import { Laika } from '@zendesk/laika/cjs/laika'

export const getApolloClientWithLaika = () => {
  const laika = new Laika()
  const link = from([laika.createLink()])

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })

  return {
    client,
    laika,
  }
}
