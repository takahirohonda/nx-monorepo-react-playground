## Troubleshoot

This deosn't work.... We need to follow the documentation (https://zendesk.github.io/laika/docs/usage-in-cypress/)

```tsx
cy.then(() => {
  getProductsInterceptor = laika
    .intercept({
      operationName: 'GetProducts',
    })
    .mockResultOnce({
      result: productsMock,
    })
    .disableNetworkFallback()
})
```

Correct way

```tsx
describe('My suite', () => {
  /** @type {import('@zendesk/laika').Laika} */
  let laika

  before(() => {
    cy.visit('/')
    cy.window()
      .its('laika')
      .then((instance) => {
        // this looks like a code smell, but it isn't
        // instance will not change and we will only use it inside future `then`s
        // by that time the variable will have been set!
        laika = instance
      })
  })

  it('waits for the subscription, pushes out data and asserts the element updated', () => {
    /** @type {import('@zendesk/laika').InterceptApi} */
    let getActiveUsersInterceptor

    cy.then(() => {
      getActiveUsersInterceptor = laika.intercept({
        clientName: 'users',
        operationName: 'getActiveUsers',
      })
    })

    cy.then({ timeout: 5000 }, async () => {
      await getActiveUsersInterceptor.waitForActiveSubscription()
      getActiveUsersInterceptor.fireSubscriptionUpdate({
        result: { data: { count: 10 } },
      })
    })

    cy.get('activeUsers').contains('There are 10 users currently active on the website')
  })
})
```
