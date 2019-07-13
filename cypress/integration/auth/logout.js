context('Logout', () => {

  beforeEach(() => {
    cy.login();
  });

  it('should logout user', () => {
    cy.get('.profile-img').click();
    cy.get('.mat-menu-content').should('be.visible');
    cy.get('.mat-menu-item').contains('Log out').click();

    cy.url().should('include', '/login');
  });

});
