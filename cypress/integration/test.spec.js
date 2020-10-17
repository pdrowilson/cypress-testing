/// <reference types="cypress" />

describe('test', () => {
  it('testing google search', () => {
    cy.visit('www.google.com');
    cy.get('.gLFyf').type('youtube');
    
    // routing
    // start server com cy.server()
    // criar uma routa com cy.route()
    // atribuir rota a um alias
    
    cy.server();
    cy.route('GET', 'https://www.google.com/async/bgasy?ei=bEKKX4TxO7HY5OUPr6u4iAc&yv=3&async=_fmt:jspb').as('getYoutube');
    
    cy.get('.aajZCb > .tfB0Bf > center > .gNO89b').click();

    cy.wait(2000)
  });
});