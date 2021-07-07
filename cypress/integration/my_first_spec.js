/// <reference types="Cypress" />>

describe("My first test suite", () => {
  it("test url works", () => {
    cy.visit("http://localhost:4100");
  });
  it("test signup exists", () => {
    cy.contains("a.nav-link", "Sign up").click();
  });
});
