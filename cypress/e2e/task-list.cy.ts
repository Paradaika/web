/// <reference types="Cypress" />

describe('Todo List', () => {
  it('should be a todo list', () => {
    cy.visit('http://localhost:3000');
    cy.contains(/Todo list/i);
  });

  it('should be a form ', () => {
    cy.visit('http://localhost:3000');
    const todoListHeader = cy.contains(/Todo list/i);

    todoListHeader.click();

    cy.get('input');
  });

  it('should create a todo ', () => {
    cy.visit('http://localhost:3000');
    const todoListHeader = cy.contains(/Todo list/i);
    const todoText = 'TEST 1';

    todoListHeader.click();
    cy.get('input[name="todo"]').type(todoText + '{enter}', { force: true });

    cy.contains(todoText);
  });

  it('should complete the task on click ', () => {
    cy.visit('http://localhost:3000');
    const todoListHeader = cy.contains(/Todo list/i);
    const todoText = 'TEST 1';

    todoListHeader.click();
    cy.get('input[name="todo"]').type(todoText + '{enter}', { force: true });
    cy.get('.sc-ksBlkl').click();

    //cy.get('.sc-ksBlkl').should('have.color', 'disabled')
    cy.get('.done');
  });

  it('should move completed task to the last position ', () => {
    cy.visit('http://localhost:3000');
    const todoListHeader = cy.contains(/Todo list/i);
    const todoText = 'TEST 1';
    const todoText2 = 'TEST 2';

    todoListHeader.click();
    cy.get('input[name="todo"]')
      .type(todoText + '{enter}', { force: true })
      .type(todoText2 + '{enter}', { force: true });
    cy.get('.sc-idXgbr > :nth-child(2)').find('button').click();

    cy.get('.sc-idXgbr').last().find('.sc-hBxehG').should('contain', todoText2);

    //cy.get('.sc-ksBlkl').should('have.color', 'disabled')
  });
});
