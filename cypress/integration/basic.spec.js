/// <reference types="cypress"/>

describe('Cypress basics', () =>{
  it ('Should visit a page and assert title', () =>{
    cy.visit('http://www.wcaquino.me/cypress/componentes.html')

    //const title = cy.title()

    cy.title().should('be.equal', 'Campo de Treinamento')
    cy.title().should('contain', 'Campo')

    cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .should('contain', 'Campo')
  })
})