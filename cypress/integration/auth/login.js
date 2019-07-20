context('Login', () => {
  it('should login user', () => {
    cy.login();

    cy.url().should('include', '/products');
    cy.get('h2').contains('Dashboard');
  });

  it('should check email validation', () => {
    const email = 'wrong.email@.com';

    cy.visit('/login');
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').focus();

    cy.get('mat-error').contains('Please enter a valid email address');
  });

  it('should check password validation', () => {
    cy.visit('/login');

    cy.get('input[type="password"]').focus();
    cy.get('input[type="password"]').blur();

    cy.get('mat-error').contains('Password is required');
  });

  it('should redirect to "/login" if user is not authenticated', () => {
    cy.visit('/products');

    cy.url().should('include', '/login');
  });

  it('should show warning message if password is wrong', () => {
    const email = 'qaz@qaz.com';
    const password = '11111111';

    cy.visit('/login');
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('button').contains('Login').click();

    cy.get('.toast-container').contains('Incorrect password');
  });

  it('should show spinner on login', () => {
    cy.login();

    cy.get('mat-spinner').should('be.visible');
  });

});
