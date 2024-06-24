class SalesTransactionPage{

    clickSalesTransactionButton(){
        cy.get('[href="/sales"] > .css-ewi1jp').click()
    }

    clickAddProduct(){
        cy.get('.chakra-button').click()
    }

    clickProduct(){
        cy.get('.css-1xhj18k > .chakra-button').click()
    }

    selectProduct(){
        cy.get('tbody.css-0 > :nth-child(1) > :nth-child(2)').click()
    }

    typePurchaseAmount(){
        cy.get(':nth-child(4) > .chakra-input').clear()
        cy.get(':nth-child(4) > .chakra-input').type('1')
    }

    typeNote(){
        cy.get('.chakra-textarea').type('catatan automation')
    }

    clickPayment(){
        cy.get('.css-n4rzf0 > .chakra-button').click()
    }

    clickPopupConfirmation(){
        cy.get('.css-n45e6f').click()
    }

    assertTransactionSuccess(){
        cy.get('#chakra-modal--header-22').should('have.text','transaksi sukses')
    }

    clickClose(){
        cy.get('.chakra-modal__footer > .chakra-button').click()
    }
}

export default SalesTransactionPage