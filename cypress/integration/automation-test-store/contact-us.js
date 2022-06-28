/// <reference types="Cypress" />

describe("Test Contact Us from via Automation Test Store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    // cy.get(".info_links_footer > :nth-child(5) > a").click();
    cy.xpath("//a[contains(@href, 'contact')]")
      .click()
      .then((linktText) => {
        cy.log(`The text is ${linktText.text()}`);
      });
    cy.get("#ContactUsFrm_first_name").type("ori");
    cy.get("#ContactUsFrm_email").type("kanfi@gmail.com");
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type("I dont know what it is");
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
    cy.log("Test has compelted");
  });
});
