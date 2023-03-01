describe('template spec', () => {
  beforeEach(() => {});
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

  it('should create a counter ', () => {
    cy.visit('http://localhost:3000');
    const counters = cy.contains(/Counters/i);
    const counter1 = 'COUNTER 1';

    counters.click();
    cy.get('.timeTrackerInput').type(counter1 + '{enter}', { force: true });

    cy.contains(counter1);
  });

  it('should start a timer ', () => {
    cy.visit('http://localhost:3000');
    const counters = cy.contains(/Counters/i);
    const counter1 = 'COUNTER 1';

    counters.click();
    cy.get('.timeTrackerInput').type(counter1 + '{enter}', { force: true });
    cy.contains(counter1);
    cy.contains(/play/i).click();
    setTimeout(() => {}, 3000);

    cy.get('.sc-fLcnxK > :nth-child(1)').should('contain', '3');
  });
});
