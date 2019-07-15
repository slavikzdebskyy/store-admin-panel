context('App', () => {
  it('should load app and display Dashboard Admin', () => {
    const appTitle = 'Dashboard Admin';

    cy.visit('/login');

    cy.get('h3').contains(appTitle);
  });
});
