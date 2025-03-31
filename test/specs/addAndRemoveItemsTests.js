import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import YourCartPage from '../pageobjects/yourcart.page.js'
import HamburgerMenu from '../pageobjects/hambugerMenu.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login("standard_user", "secret_sauce")
        await HomePage.addOneRandomItem()
        await YourCartPage.verifyCart()
        await YourCartPage.navigateBacktoShoppingAreaFromCartViaContinueShopping()
        await HomePage.addAdditionalItems()
        await YourCartPage.verifyCart()
        await YourCartPage.removeOneItemFromCart()
        await HamburgerMenu.hamburgerMenuButton.click()
        await HamburgerMenu.allItems.click()
        await HomePage.removeAdditionalItems()



    })
})
