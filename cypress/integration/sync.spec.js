/// <reference types="cypress"/>

describe("Esperas...", () => {
  before(() => {
    cy.visit("http://www.wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload();
  });

  it("Deve esperar o elemento estar disponível", () => {
    cy.get("#novoCampo").should("not.exist");
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("not.exist");
    cy.get("#novoCampo").type("funciona");
  });

  it("Deve fazer retrys", () => {
    cy.get("#buttonDelay")
      .click()
      .should("exist")
      .should("not.exist");
  });

  it("Uso do find", () => {
    cy.get("#buttonList").click();

    cy.get("#lista li")
      .find("span")
      .should("contain", "Item 1");

    // cy.get('#lista li')
    // .find('span')
    // .should('contain', 'Item 2')

    cy.get("#lista li span").should("contain", "Item 2");
  });

  it("Uso do timeout", () => {
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("exist");
  });

  it("Click retry", () => {
    cy.get("#buttonCount")
      .click()
      .should("have.value", "11");
  });

  it.only("Should vs Then", () => {
    cy.get("#buttonListDOM").then($el => {
      // .should('have.length',1)
      expect($el).to.have.length(1);
      return 2
    }).and('have.id', 'buttonListDOM')
  });
});
