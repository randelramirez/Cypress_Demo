describe("Register", () => {
  it("register a new user", () => {
    const seconds = new Date().getSeconds();
    const username = `visitor${seconds}`;
    const email = `test${seconds}@gmail.com`;
    const password = "testing";

    cy.visit("http://localhost:4100");
    cy.contains("a.nav-link", "Sign up").click();

    cy.location("pathname").should("equal", "/register");

    cy.get("[data-cy=username]").type(username);
    cy.get("[data-cy=email]").type(email);
    cy.get("[data-cy=password]").type(password);

    cy.get("form").submit();

    cy.location("pathname").should("equal", "/");
    cy.get("[data-cy=profile]").should("be.visible");
    
    cy.contains("a.nav-link", "Your Feed").should(
      "have.class",
      "nav-link active"
    );
    cy.contains("a.nav-link", "Global Feed").should(
      "not.have.class",
      "nav-link active"
    );

    cy.contains("a.nav-link", "Global Feed").click();
    cy.contains("a.nav-link", "Your Feed").should(
        "not.have.class",
        "nav-link active"
    );
    cy.contains("a.nav-link", "Global Feed").should(
        "have.class",
        "nav-link active"
    )
    
    
  });
});
