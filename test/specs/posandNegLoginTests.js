import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.negUserScenarios("4Fapijs67dhiowkd")
        await LoginPage.posUserScenarios("secret_sauce")
    })
})

