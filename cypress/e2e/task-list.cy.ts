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
});
