/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
describe('Pokedex', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate to a specific pokemon page', () => {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('ivysaur')
    cy.contains('overgrow')
    cy.contains('a', 'Previous').should('have.attr', 'href', '/pokemon/bulbasaur')
    cy.contains('a', 'Next').should('have.attr', 'href', '/pokemon/venusaur')
    cy.contains('chlorophyll')
  })
})