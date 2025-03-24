import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.negUserScenarios("4Fapijs67dhiowkd")
        await loginPage.posUserScenarios("secret_sauce")
    })
})

