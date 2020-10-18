/// <reference types="cypress"/>

describe('Work with basic elements', () =>{
  before(()=>{
    cy.visit('http://www.wcaquino.me/cypress/componentes.html')
  })

  beforeEach(()=>{
    cy.reload()
  })

  it('Text', ()=>{
    
    cy.get('.facilAchar').should('contain', 'Cuidado')
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
  })

  it('Links', ()=>{
    cy.get('[href="#"]').click()
    cy.get('#resultado').should('have.text', 'Voltou!')

    cy.reload()
    cy.contains('Voltar').click()
    cy.get('#resultado').should('have.text', 'Voltou!')
  })

})