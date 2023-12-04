import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('I am on the Conduit Login page', function(){
    cy.visit('https://react-redux.realworld.io')
    cy.get('a[href="#login"]').click()
})

When('I login with valid credentials', function(){
    cy.get('input[type="email"]').type('cypressdemo@gmail.com')
    cy.get('input[type="password"]').type('cypressdemo')
    cy.get('button[type="submit"]').click()
})

And('I click on the settings button', function(){
    cy.get('a[href="#settings"]').click()
})

And('I click on the Logout Button', function(){
    cy.contains('Or click here to logout.').click()
})

Then('I route back to the Login page', function(){
    cy.title().should('eq','Conduit')
})