import SalesTransactionPage from "../support/pages/salesTransactionPage"

describe('Sales Transaction Test', () => {

  const salesTransactionPage = new SalesTransactionPage()
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users.email, users.password, users.shopName)
    })
  })

  it('should add a new sales transaction', () => {

    salesTransactionPage.clickSalesTransactionButton()
    salesTransactionPage.clickAddProduct()
    salesTransactionPage.clickProduct()
    salesTransactionPage.selectProduct()
    salesTransactionPage.typePurchaseAmount()
    salesTransactionPage.typeNote()
    salesTransactionPage.clickPayment()
    salesTransactionPage.clickPopupConfirmation()
    salesTransactionPage.assertTransactionSuccess()
    salesTransactionPage.clickClose()
  })
})