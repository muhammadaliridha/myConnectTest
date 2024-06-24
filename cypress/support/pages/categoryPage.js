class CategoryPage{
    clickCategoryButton(){
        cy.get('[href="/categories"] > .css-ewi1jp').click()
    }

    clickAddButton(){
        cy.get('.css-1piskbq').click()
    }

    typeCategoryName(value){
        cy.get('#nama').type(value)
    }

    typeDescription(){
        cy.get('#deskripsi').type('deskripsi automation')
    }

    clickSubmitButton(){
        cy.get('.chakra-button').click()
    }

    assertAddCategorySuccess(value){
        cy.get('.chakra-toast > .chakra-toast__inner >').should('be.visible')
        cy.reload()
        cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').should('contain.text',value)
    }
}

export default CategoryPage