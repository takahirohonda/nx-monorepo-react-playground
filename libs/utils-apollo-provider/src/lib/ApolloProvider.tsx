import { ReactNode } from "react"
import { getClient } from "./client"
import { ApolloProvider } from "@apollo/client"


interface ApolloProviderReactProps {
  uri: string
  children: ReactNode
}

export const ApolloProviderReact = ({ uri, children }: ApolloProviderReactProps) => {
  const client = getClient({ uri })
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}