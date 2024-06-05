import { ReactNode, useMemo } from 'react'
import { getClient } from './client'
import { ApolloProvider } from '@apollo/client'

interface ApolloProviderReactProps {
  uri: string
  token: string
  customerImpersonationToken?: string
  children: ReactNode
}

export const ApolloProviderReact = ({
  uri,
  token,
  customerImpersonationToken,
  children,
}: ApolloProviderReactProps) => {
  const client = useMemo(
    () => getClient({ uri, token, customerImpersonationToken }),
    [customerImpersonationToken, token, uri]
  )
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
