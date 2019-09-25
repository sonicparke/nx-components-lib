import { getGreeting } from '../support/app.po';

describe('elements-shop-widgets', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to elements-shop-widgets!');
  });
});
