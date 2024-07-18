import { type InterceptApi, type Laika } from '@zendesk/laika'

import { productsMock } from '../fixtures/productsMock'

describe('Shop Page', () => {
  let laika: Laika
  beforeEach(() => {
    cy.visit('/shop')
    cy.window()
      .its('laika')
      .then((instance) => {
        laika = instance
      })
  })

  it('should display the shop items', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let getProductsInterceptor

    cy.then(() => {
      getProductsInterceptor = laika
        .intercept({
          clientName: 'ecommerce',
          operationName: 'GetProducts',
        })
        .mockResultOnce({
          result: productsMock,
        })
        .disableNetworkFallback()
    })

    cy.findByText('AU$99').should('be.visible')
  })
})
