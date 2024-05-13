import { ApolloClient, InMemoryCache } from '@apollo/client';

export const getClient = ({ uri }: { uri: string }) => new ApolloClient({
  uri,
  cache: new InMemoryCache()
})