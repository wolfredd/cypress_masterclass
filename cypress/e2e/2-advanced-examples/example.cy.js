const navbarText = Cypress.env('navbarText');

describe("First test", () => {

    beforeEach(() =>{
        cy.visit('/commands/actions')
        cy.url().should('include', '/commands/actions')
    })

    context('My first test', () => {

        it('checks if it exists', () => {
            cy.chain('.container');
        })
        
            // it('has an h1 on the page', () => {
            //     cy.get('[data-cy="header"]').should('exist');
            // })

            it('testing header', () => {
                cy.header('header').should('exist');
            })
        
            // it('renders the correct h1 text', () => {
            //     cy.get('h1').should('contain.text', 'Actions');
            // })
        
            // it('renders a paragraph under the h1', () => {
            //     cy.get('.container').find('p').should('exist');
            // })
        
            it('renders a paragraph under the h1', () => {
                cy.get('.container').first().find('p').should('not.exist');
            })
        
            // it('renders a paragraph under the h1', () => {
            //     cy.get('.container').eq(1).find('p').should('exist');
            // })
        
            it('renders asection with the correct elements', () => {
                cy.get('.container').eq(2).within(() =>{
                    cy.get('h4').should('exist');
                    cy.get('p').should('exist');
                })
            })
        
            it('correctly renders the cypress website link', () => {
                cy.findByText(navbarText).should('exist');
            })
        
        })


})