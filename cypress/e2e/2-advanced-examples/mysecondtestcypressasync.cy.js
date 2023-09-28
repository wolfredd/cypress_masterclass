describe('async testing', () => { 

    context('My first test', () => {

        it('types into email field', () => {
            cy.visit('/commands/actions')
            cy.findByPlaceholderText('Email').type('test@email.com')
            cy.wait(5000).then(() => {
                console.log('logging inside cy')
                fetch('https://api.spacexdata.com/v3/missions')
                .then((res) => res.json())
                .then((data) => {

                    console.log(data)
                })
            })
        })
        
    })

 })


