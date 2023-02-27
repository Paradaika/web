describe('template spec', () => {
  it('should be a Counters section', () => {
    cy.visit('http://localhost:3000');
    cy.contains(/Counters/i);
  });

  it('should be a form ', () => {
    cy.visit('http://localhost:3000');
    const counters = cy.contains(/Counters/i);

    counters.click();

    cy.get('input');
  });
});
