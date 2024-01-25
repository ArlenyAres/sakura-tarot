describe('Instructions Page', () => {
  beforeEach(() => {
    // You might want to visit the page or perform other setup tasks before each test
    cy.visit('http://localhost:3000/instructions');
  });

  it('should display the main title correctly', () => {
    cy.get('h1').should('have.class', 'text-purple-text');
    cy.get('h1').should('be.visible');
    cy.get('h1').should('contain.text', 'Instrucciones');
  });

  it('should render the CardContainer component', () => {
    cy.get('[data-testid="card-container"]').should('exist');
  });

  it('should have a background color of purple-medium', () => {
    cy.get('main').should('have.class', 'bg-purple-medium');
  });

  // You can add more tests based on the specific functionality and UI elements in your component
});
