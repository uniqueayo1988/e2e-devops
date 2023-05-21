describe('Search for books', () => {
  beforeEach(() => {
      cy.visit('/')
  })

  it('should return one book with title Agile Testing', () => {
      const title = 'Agile Testing'
      const expectedCount = 1

      // Search
      cy.get('#searchBar').type(title, { delay: 250 })

      // Verify count
      cy.get('li:not(.ui-screen-hidden)').should('have.length', expectedCount, `There should be exactly ${expectedCount} book(s) visible`)

      // Verify book title
      cy.get('h2').should('contain.text', title, `${title} should be visible`)
  })

  it('should return multiple books with title Test', () => {
      const title = 'Testi'
      const expectedBooks = [
          // 'Test Automation in the Real World',
          // 'Experiences of Test Automation',
          // 'Agile Testing',
          // 'How Google Tests Software',
          'Java For Testers']
      const expectedCount = expectedBooks.length

      // Search
      cy.get('#searchBar').type(title, { delay: 250 })

      // Verify count
      cy.get('li:not(.ui-screen-hidden)').should('have.length', expectedCount, `There should be exactly ${expectedCount} book(s) visible`)

      // Verify book titles
      expectedBooks.forEach(b => cy.get('h2').should('contain.text', b, `${b} should be visible`))
  })
})