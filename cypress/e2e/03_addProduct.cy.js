import { generateUniqueName } from "../support/functions"
import { generateUniqueBuyPrice } from "../support/functions"
import { generateUniqueSellPrice } from "../support/functions"
import ProductPage from "../support/pages/productPage"

describe('Product Test', () => {

  const productPage = new ProductPage()

  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users.email, users.password, users.shopName)
    })
  })

  it('should add a new product', () => {
    const uniqueProductName = generateUniqueName('product')
    const uniqueBuyPrice = generateUniqueBuyPrice()
    const uniqueSellPrice = generateUniqueSellPrice(uniqueBuyPrice)

    productPage.clickProductButton()
    productPage.clickAddButton()
    productPage.typeProductName(uniqueProductName)
    productPage.typeDescription()
    productPage.typeBuyPrice(uniqueBuyPrice)
    productPage.typeSellPrice(uniqueSellPrice)
    productPage.typeStock()
    productPage.selectCategory()
    productPage.clickSubmitButton()
    productPage.assertAddProductSuccess(uniqueProductName)
  })
})