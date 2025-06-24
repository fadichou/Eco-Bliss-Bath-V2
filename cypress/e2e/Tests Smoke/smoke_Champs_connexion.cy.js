describe("Champs de connexion", () => {
  it("Les champs Email, Mot de passe, et s'inscrire sont visibles", () => {
    cy.visit("http://localhost:4200/#/");
    cy.get('[data-cy="nav-link-login"]').should("be.visible").click(); // Vérifier le bouton connexion et clic
    cy.get('[data-cy="login-input-username"]').should("exist"); // Vérifier le champ Email (username)
    cy.get('[data-cy="login-input-password"]').should("exist"); // Vérifier le champ mot de passe
    cy.get('[data-cy="login-submit"]').should("be.visible"); // Vérifier le bouton "Se connecter"
    cy.contains("S'inscrire").should("be.visible"); // Vérifier le bouton "S'inscrire"
  });
});
