import { ApolloProvider } from '@apollo/client'
import { getApolloClientWithLaika } from './getApolloClientWithLaika'
import { ShopPage } from './ShopPage'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('ShopPage', () => {
  const { client, laika } = getApolloClientWithLaika()

  it('should retrieve shop items', () => {
    const interceptor = laika.intercept({
      operationName: 'GetProduct',
    })

    interceptor.mockResultOnce({
      result: {
        data: {
          /* ... */
        },
      },
    })

    render(
      <ApolloProvider client={client}>
        <MemoryRouter>
          <ShopPage />
        </MemoryRouter>
      </ApolloProvider>
    )
  })
})
