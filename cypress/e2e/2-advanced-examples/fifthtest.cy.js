describe('assertion testing', () => { 

    context('My third test', () => {

        it('links to the actions page correctly', () => {
            cy.visit('/')
            cy.findAllByText('Actions').last().click()
            cy.url().should('include', 'commands/actions')
            //or
            //cy.url().should('eq', 'http://localhost:8080/commands/actions')
        })

        it('links to the actions page correctly from the first actions link', () => {
            cy.visit('/')
            cy.findAllByText('Actions').first().click({ force:true })
            cy.url().should('include', 'commands/actions')
            //or
            //cy.url().should('eq', 'http://localhost:8080/commands/actions')
        })    
        
        it('types in an input field', () => {
            cy.visit('/commands/actions')
            cy.findByPlaceholderText('Email').type('Test').should('have.value', 'Test' )
        })
        
        it('clears an input field', () => {
            cy.visit('/commands/actions')
            cy.findByLabelText('Describe:').type('Test description').should('have.value', 'Test description' ).clear().should('have.value', '')
        })

        it('checks a checkbox', () => {
            cy.visit('/commands/actions')
            cy.get('.action-checkboxes [type="checkbox"]').first().check().should('be.checked')
        })

        it('checks a disabled checkbox', () => {
            cy.visit('/commands/actions')
            cy.get('.action-checkboxes [type="checkbox"]').eq(1).check({force: true}).should('be.checked')
        })
    })
 })
