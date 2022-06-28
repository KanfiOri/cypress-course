/// <reference types="Cypress" />

describe("Verify radio buttons via webdriveruni", () => {
  it("check specific radio button", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#radio-buttons").find("[type='radio']").first().check;
    cy.get("#radio-buttons").find("[type='radio']").eq(1).check;
  });
});
