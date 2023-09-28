describe('custom commands', () => {

    context('my seventh test', () => {

        it('sets a token in local storage', () => {
            cy.setLocalStorage('token', '1234')            
        })

        it('gets a token from local storage', () => {
            cy.setLocalStorage('token', '1234')
            cy.getLocalStorage('token').should('eq', '1234')            
        })

        it('overwrites the type command by using sensitive characters', () => {
            cy.visit('/commands/actions')
            cy.findByPlaceholderText('Email').type('Test').should('have.value', 'Test' )
            cy.findByPlaceholderText('Email').type('Test', {sensitive:true}).should('have.value', 'TestTest' )
        })
    })
})