class ProductPage {
    clickProductButton() {
        cy.get('[href="/products"] > .css-ewi1jp').click()
    }

    clickAddButton() {
        cy.get('.chakra-button').click()
    }

    typeProductName(value) {
        cy.get('#nama').type(value)
    }

    typeDescription() {
        cy.get('#deskripsi').type('deskripsi automation')
    }

    typeBuyPrice(value) {
        cy.get('[id="harga beli"]').type(value)
    }

    typeSellPrice(value) {
        cy.get('[id="harga jual"]').type(value)
    }

    typeStock() {
        cy.get('#stok').type('100')
    }

    selectCategory() {
        cy.get('#kategori').click()
        cy.get(':nth-child(1) > .css-u3dlpe').click()
    }

    clickSubmitButton() {
        cy.get('.chakra-button').click()
    }

    assertAddProductSuccess(value) {
        cy.get('.chakra-toast > .chakra-toast__inner >').should('be.visible')
        cy.reload()
        cy.get('tbody.css-0 > .css-0 > :nth-child(2)').should('contain.text', value)
    }
}

export default ProductPage