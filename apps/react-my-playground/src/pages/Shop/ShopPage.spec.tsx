import { ApolloProvider } from '@apollo/client'
import { getApolloClientWithLaika } from './getApolloClientWithLaika'
import { ShopPage } from './ShopPage'
import { render, act, waitFor, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { productsMock } from './mockData/productsMock'

describe('ShopPage', () => {
  it('should retrieve shop items', async () => {
    const { client, laika } = getApolloClientWithLaika()
    laika
      .intercept({
        operationName: 'GetProducts',
      })
      .mockResultOnce({
        result: productsMock,
      })
      .disableNetworkFallback()

    await act(async () => {
      render(
        <ApolloProvider client={client}>
          <MemoryRouter>
            <ShopPage />
          </MemoryRouter>
        </ApolloProvider>
      )
    })
    await waitFor(() => {
      expect(screen.getByText('AU$99')).toBeVisible()
    })
  })
})
