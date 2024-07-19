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
    let getProductsInterceptor: InterceptApi

    cy.then(() => {
      getProductsInterceptor = laika.intercept({
        clientName: 'ecommerce',
        operationName: 'GetProducts',
      })
    })

    // cy.then(() => {
    //   getProductsInterceptor
    //     .mockResultOnce({
    //       result: productsMock,
    //     })
    //     .disableNetworkFallback()
    // })

    cy.then({ timeout: 5000 }, async () => {
      await getProductsInterceptor.waitForActiveSubscription()
      getProductsInterceptor.fireSubscriptionUpdate({
        result: productsMock,
      })
    })

    cy.findByText('AU$99').should('be.visible')
  })
})
