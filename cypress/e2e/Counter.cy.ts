describe('template spec', () => {
  beforeEach(() => {
    cy.clock();
    cy.visit('http://localhost:3000');
  });
  it('should visit page', () => {});
  it('should find play button ', () => {
    cy.get('[data-testid="play-button"]');
  });
});
