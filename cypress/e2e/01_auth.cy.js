describe('Auth Test', () => {

    before('Register User', () => {
        cy.registerUser()
    })

    it('should log in with the newly registered user', () => {
        cy.fixture('users').then((users) => {
            cy.login(users.email, users.password, users.shopName)
        })
    })
})