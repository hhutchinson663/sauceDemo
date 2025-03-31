import { $ } from '@wdio/globals'
import Page from './base.js';
import HamburgerMenu from './hambugerMenu.page.js';
import { expect } from '@wdio/globals'
import HomePage from './home.page.js';


class YourCartPage extends Page {
    get yourCartButton () {
        return $('.shopping_cart_link')
    }

    get continueShoppingButton () {
        return $('#continue-shopping')
    }

    get shoppingCartContent () {
        return $('.cart_item')
    }

    get yourCartTitle () {
        return $('//span[contains(text(),"Your Cart")]')
    }

    async verifyCart() {
        await this.yourCartButton.click()
        expect (this.yourCartTitle).toBeExisting()
        expect (this.shoppingCartContent).toBeExisting()
    }

    async navigateBacktoShoppingAreaFromCartViaContinueShopping() {
        await this.continueShoppingButton.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    }

    async removeOneItemFromCart() {
        let selectorItem = await HomePage.removeFromCart(HomePage.inventoryItems[HomePage.randomIndex])
        await selectorItem.click()
        expect(this.continueShoppingButton).toBeExisting()
        expect (this.shoppingCartContent).toBeExisting()
    }

    }


export default new YourCartPage();