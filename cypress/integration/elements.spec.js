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

  it.only('TextFields', ()=>{
    cy.get('#formNome').type('Luis Feitosa')
    cy.get('#formNome').should('have.value','Luis Feitosa')

    cy.get('#elementosForm\\:sugestoes').type('textArea')
    cy.get('#elementosForm\\:sugestoes').should('have.value','textArea')

    cy.get('[data-cy=dataSobrenome]')
      .type('teste12345{backspace}')
      .should('have.value', 'teste1234')

      cy.get('#elementosForm\\:sugestoes')
        .clear()
        .type('Erro{selectall}acerto', {delay:100})
        .should('have.value','acerto')
  })

})