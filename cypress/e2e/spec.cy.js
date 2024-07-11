describe('Pokedex', function() {
  it('front page can be opened', function() {
    /* eslint-disable no-undef */
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    /* eslint-enable no-undef */

  })
})

describe('Pokedex', function() {
  it('Lnk clicked', function() {
    /* eslint-disable no-undef */
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
    /* eslint-enable no-undef */


  })
})

