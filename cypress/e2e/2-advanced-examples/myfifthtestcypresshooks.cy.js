describe('hooks in cypress', () => {

    context('my fifth test', () => {

        before(() => {
            cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
        })

        beforeEach(() => {
            cy.visit('/')
        })

        afterEach(() => {
            cy.log('after each test this is printed')
        })

        after(() => {
            cy.log('after all test are done this is printed once')
        })

        it('has an h1 on the homepage', () => {
            cy.get('h1').should('exist')
        })

        it('renders the correct h1 text', () => {
            cy.get('h1').should('contain.text', 'Kitchen Sink');
        })
    })
})