/// <reference types="cypress"/>

describe('Cypress basics', () =>{
  it.only ('Should visit a page and assert title', () =>{
    cy.visit('http://www.wcaquino.me/cypress/componentes.html')

    //const title = cy.title()

    cy.title().should('be.equal', 'Campo de Treinamento')
    cy.title().should('contain', 'Campo')

    // cy.pause()
    cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .should('contain', 'Campo')
  })

  it ('Should fin and interact with an element', () =>{
    cy.visit('http://www.wcaquino.me/cypress/componentes.html')

    // cy.get('#formNome')
    //     .should('be.equal', 'Luis')

    cy.get('#buttonSimple')
          .click()
          .should('have.value', 'Obrigado!')
  })
})