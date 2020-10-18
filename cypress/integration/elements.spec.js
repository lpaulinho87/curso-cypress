/// <reference types="cypress"/>

describe('Work with basic elements', () =>{
  it('Text', ()=>{
    cy.visit('http://www.wcaquino.me/cypress/componentes.html')
    cy.get('.facilAchar').should('contain', 'Cuidado')
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
  })

  it.only('Links', ()=>{
    cy.visit('http://www.wcaquino.me/cypress/componentes.html')

    cy.get('[href="#"]').click()
    cy.get('#resultado').should('have.text', 'Voltou!')

    cy.reload()
    cy.contains('Voltar').click()
    cy.get('#resultado').should('have.text', 'Voltou!')
  })

})