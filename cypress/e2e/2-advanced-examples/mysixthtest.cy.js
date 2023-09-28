describe('fixture testing', () => { 

    context('sixth test', () => {

        beforeEach(() => {
            cy.fixture('example').then(function (data) {
                this.data = data
                cy.log('THIS: ', this.data)
            })
        })

        it('pulls data from a fixture', () => {
            cy.fixture('example').then((data) => {
                cy.log('DATA: ', data)
            })
        })

        it('updates fixture data inline', () => {
            cy.fixture('example').then((data) => {
                data.email = 'updatedemail@cypress.com'
                cy.log('UPDATED: ', data)
            })
        })

        it('uses a network request', () => {
            cy.visit('/commands/network-requests')
            cy.intercept('GET', '**/comments/*').as('getComment')
            cy.get('.network-btn').click()
            cy.wait('@getComment').then((res) => {
                cy.log('Response:', res)
            })
        })

        it('uses fixture data in a network request', function () {
            cy.visit('/commands/network-requests')
            cy.intercept('GET', '**/comments/*', this.data).as('getComment')
            cy.get('.network-btn').click()
            cy.wait('@getComment').then((res) => {
                cy.log('Response:', res)
            })
        })

    })
 })

 //why not arrow func for data
 //get and find difference