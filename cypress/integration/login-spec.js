describe("login test", () => {
  it("does not work with wrong credentials", () => {
    
    cy.visit("http://localhost:4100");
    cy.get("[data-cy=sign-in]").click();
    cy.get("[data-cy=username]").type("wrong@gmail.com");
    cy.get("[data-cy=password]").type("visitor");
    cy.get("[data-cy=login-form]").submit();
    
    // looks for an element with a class .error-messages and has li inside it
    cy.contains('.error-messages li','notFound User Not Found').should('be.visible')
  });

  it("successful login with correct credentials", () => {
    
    cy.visit("http://localhost:4100");
    cy.get("[data-cy=sign-in]").click();
    cy.get("[data-cy=username]").type("admin@gmail.com");
    cy.get("[data-cy=password]").type("admin");
    cy.get("[data-cy=login-form]").submit();

    cy.get('[data-cy=your-feed]')
    cy.contains('a.nav-link', 'Your Feed').should('have.class', 'nav-link active')
    cy.get('[data-cy=global-feed]').click()
    cy.contains('a.nav-link', 'Global Feed').should('have.class', 'nav-link active')
    cy.contains('a.nav-link', 'Your Feed').should('not.have.class', 'nav-link active')
  });
});
