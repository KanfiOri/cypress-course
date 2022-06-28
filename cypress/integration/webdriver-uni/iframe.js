/// <reference types="Cypress" />

describe("Handling IFrame and Modals", () => {
  it("handle Webdriveruni iframe and modal", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });

    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });

    cy.get("@iframe").find("#button-find-out-more").click();

    cy.get("@iframe").find("#myModal").as("modal");

    cy.get("@modal").should(($expextedText) => {
      const text = $expextedText.text();
      expect(text).to.include(
        "Welcome to webdriveruniversity.com we sell a range of electric goods"
      );
    });
  });
});
