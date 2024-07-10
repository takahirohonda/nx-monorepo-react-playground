import { ApolloClient, gql } from '@apollo/client'
import { MockLink } from '@apollo/client/testing'

import { getCache } from './getCache_merge'

describe('InMemoryCache custom merge function', () => {
  it('should merge incoming and existing data using the custom merge function', () => {
    const cache = getCache()
    const link = new MockLink([])
    const client = new ApolloClient({
      cache,
      link,
    })
    // Initial data
    cache.writeQuery({
      query: gql`
        query GetSite {
          site {
            name
            url
          }
        }
      `,
      data: {
        site: {
          __typename: 'Site',
          name: 'Existing Site',
          url: 'https://existing.com',
        },
      },
    })

    // Incoming data
    client.writeQuery({
      query: gql`
        query GetSite {
          site {
            description
          }
        }
      `,
      data: {
        site: {
          __typename: 'Site',
          description: 'Incoming Description',
        },
      },
    })

    // Read merged data
    const result = client.readQuery({
      query: gql`
        query GetSite {
          site {
            name
            url
            description
          }
        }
      `,
    })

    expect(result).toEqual({
      site: {
        __typename: 'Site',
        name: 'Existing Site',
        url: 'https://existing.com',
        description: 'Incoming Description',
      },
    })
  })
})
