import { getGreeting } from '../support/app.po'

describe('Shop Page', () => {
  beforeEach(() => cy.visit('/shop'))

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Shop/)
  })
})
