import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(HomePage.swagLabHeader).toBeExisting()
        await expect(HomePage.swagLabHeader).toHaveText(
            expect.stringContaining('Swag Labs'))
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
})

