import { ReactNode, useEffect, useState } from 'react'
import { getClient } from './client'
import {
  ApolloProvider,
  type ApolloClient,
  type NormalizedCacheObject,
} from '@apollo/client'
interface ApolloProviderReactProps {
  uri: string
  token: string
  children: ReactNode
}

export const ApolloProviderReact = ({
  uri,
  token,
  children,
}: ApolloProviderReactProps) => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>()

  useEffect(() => {
    const initialiseClient = async () => {
      const client = await getClient({ uri, token })
      setClient(client)
    }
    initialiseClient()
  }, [token, uri])

  if (client) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
  }
  return <div>Loading...</div>
}
