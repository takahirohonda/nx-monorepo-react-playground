describe('Home Page', () => {
  beforeEach(() => cy.visit('/'))

  it('should visit home page', () => {
    cy.findByRole('heading', { name: 'Home' })
  })
})
