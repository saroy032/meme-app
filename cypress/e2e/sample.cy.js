describe('My First Test', () => {
    it('Visits the app', () => {
      cy.visit('http://localhost:3000');
      cy.contains('Meme App');

      cy.visit('http://localhost:3000/about/newpage');
      cy.contains('Testing routes...');
    });
  });
  