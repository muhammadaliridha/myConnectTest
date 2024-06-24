import { generateUniqueName } from "./functions"

Cypress.Commands.add('registerUser',()=>{
    const shopName = generateUniqueName('shop')
const email = shopName+'@mail7.io'
const password = 'Welcome1234'

cy.visit('https://kasirdemo.belajarqa.com/')    
cy.get('.css-4rvv7a > a').click()
    cy.get('#name').type(shopName)
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('.css-1n8i4of').click()
    cy.get('.chakra-toast > .chakra-toast__inner >').should('be.visible')

    //save user registered to json
    cy.writeFile('cypress/fixtures/users.json',{shopName:shopName, email: email, password:password})
})

Cypress.Commands.add('login',(email, password, shopName)=>{
    //visit link web
    cy.visit('https://kasirdemo.belajarqa.com/')
    cy.get('.chakra-heading').should('be.visible')
    
    //fill login form
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('.chakra-button').click()
    cy.get(':nth-child(1) > .chakra-stat > dl > .chakra-stat__label').should('contain.text',shopName)
})