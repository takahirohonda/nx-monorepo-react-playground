import { ReactNode } from "react"
import { getClient } from "./client"
import { ApolloProvider } from "@apollo/client"


interface ApolloProviderReactProps {
  uri: string
  token: string
  children: ReactNode
}

export const ApolloProviderReact = ({ uri, token, children }: ApolloProviderReactProps) => {
  const client = getClient({ uri, token })
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}