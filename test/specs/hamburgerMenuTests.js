import HamburgerMenu from '../pageobjects/hambugerMenu.page.js'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login("standard_user", "secret_sauce")
        await HomePage.addOneRandomItem()
        await HamburgerMenu.hamburgerMenuButton.click()
        await HamburgerMenu.resetAppState.click()
        await HamburgerMenu.clickAboutAndVerify()
    })
})