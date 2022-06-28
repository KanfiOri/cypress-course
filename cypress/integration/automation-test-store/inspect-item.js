/// <reference types="Cypress" />

describe("Inspect Automation Test Store items using chain of commands", () => {
  it("Click on the first item using item header", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
    ).click();
  });

  it.only("Click on the first item using item header", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then((itemHeaderText) => {
        console.log(`Selected the following items: ${itemHeaderText.text()}`);
      });
  });

  it("Click on the first item using index", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
});
