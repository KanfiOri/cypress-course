/// <reference types="Cypress" />

describe("Handling IFrame and Modals", () => {
  it("handle Webdriveruni iframe and modal", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#checkboxes > :nth-child(5) > input").as("option-3");
    cy.get("@option-3").uncheck().should("not.to.be.checked");
  });
});
