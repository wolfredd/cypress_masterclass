// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'


Cypress.Commands.add('header', (selector) => {
    return cy.get(`[data-test=${selector}]`)
})


Cypress.Commands.add('chain', (param) => {
    return cy.get(param).should('exist')

})

Cypress.Commands.add('setLocalStorage', (key, value) => {
    cy.window().then((window) => {
        window.localStorage.setItem(key, value)
    })
})

Cypress.Commands.add('getLocalStorage', (key) => {
    cy.window().then((window) => {
        return window.localStorage.getItem(key)
    })
})

Cypress.Commands.overwrite('type', (originalfn, element, text, options) => {
    if(options && options.sensitive){          //if options exist and thehre are sensitive options
        options.log = false                    //disable the options

        Cypress.log({
            $el: element,
            name: 'type',
            message: '*'.repeat(text.length)
        })
    }

    return originalfn(element, text, options)
})