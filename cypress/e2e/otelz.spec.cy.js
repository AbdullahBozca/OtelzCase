describe('empty spec', () => {

  var first="İstanbul"
  var second="Adilcevaz"
  var price=null
  it('passes', () => {
    cy.visit('https://www.otelz.com/')
    cy.get('[data-testid="cookieAccept"]').click()
    cy.get('[data-testid="locationSearchBtn"]').type(first).should("have.value",first)
    cy.get('[data-testid="locationSearchBtn"]').clear()
    cy.get('[data-testid="locationSearchBtn"]').type(second).should("have.value",second)
    cy.get('.sc-cd833911-1 > .active').click()
    cy.get('.sc-a26d6d0-0 > .type_0').click()
    cy.get('#searchbar_1 > :nth-child(1) > .btn').click()
    price=cy.get('[data-testid="otel-1"] > :nth-child(1) > .right-col > .price').text 
    console.log("price = "+price)
    })
})