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

  it('TextFields', ()=>{
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

  it('RadioButton', () =>{
    cy.get('#formSexoFem')
      .click()
      .should('be.checked')

      cy.get('#formSexoMasc')
      .should('not.be.checked')

      cy.get('[name=formSexo]')
        .should('have.length',2)
  })

  it('Checkbox', () =>{
    cy.get('#formComidaCarne')
      .click()
      .should('be.checked')

      cy.get('[name=formComidaFavorita]')
      .click({multiple:true})
      cy.get('#formComidaCarne').should('not.be.checked')
      cy.get('#formComidaPizza').should('be.checked')
  })

  it('Combobox', () =>{
    cy.get('[data-test=dataEscolaridade]')
      .select('2o grau completo')
      .should('have.value', '2graucomp')

      cy.get('[data-test=dataEscolaridade]')
      .select('1graucomp')
      .should('have.value', '1graucomp')

      //TODO validar opcoes do combo
  })

  it.only('Combo multiplo', () =>{
    cy.get('[data-testid=dataEsportes]')
      .select(['natacao', 'Corrida', 'nada'])

      //TODO validar opcoes do combo multiplo
  })

})