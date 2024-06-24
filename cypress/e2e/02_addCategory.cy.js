import { generateUniqueName } from "../support/functions"
import CategoryPage from "../support/pages/categoryPage"

describe('Category Tests', () => {

    const categoryPage = new CategoryPage

    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.email, users.password, users.shopName)
        })
    })

    it('should add a new category', () => {
        const uniqueCategoryName = generateUniqueName('category')

        categoryPage.clickCategoryButton()
        categoryPage.clickAddButton()
        categoryPage.typeCategoryName(uniqueCategoryName)
        categoryPage.typeDescription()
        categoryPage.clickSubmitButton()
        categoryPage.assertAddCategorySuccess(uniqueCategoryName)
    })
})