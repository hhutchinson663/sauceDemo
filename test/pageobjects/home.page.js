import { $ } from '@wdio/globals'
import Page from './base.js';
import { expect } from '@wdio/globals'
import YourCartPage from './yourcart.page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    inventoryItems = ["sauce-labs-backpack", "sauce-labs-bike-light", "sauce-labs-bolt-t-shirt", "sauce-labs-fleece-jacket", "sauce-labs-onesie", "test.allthethings()-t-shirt-(red)"]

    async addToCart(item) {
        return $(`[id="add-to-cart-${item}"]`)
    }

    async removeFromCart(item) {
        return $(`[id="remove-${item}"]`)
    }

    get swagLabHeader () {
        return $('.app_logo');
    }

    // get addSauceLabsBackpack () {
    //     return $('#add-to-cart-sauce-labs-backpack')
    // }

    // get addSauceLabsBikeLight () {
    //     return $('#add-to-cart-sauce-labs-bike-light')
    // }

    // get addSauceLabsBoltShirt () {
    //     return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    // }

    // get addSauceLabsFleece () {
    //     return $('#add-to-cart-sauce-labs-fleece-jacket')
    // }

    // get addSauceLabsOnesie () {
    //     return $('#add-to-cart-sauce-labs-onesie')
    // }

    // get addSauceLabsRedShirt () {
    //     return $('#add-to-cart-test.allthethings()-t-shirt-(red)')
    // }

    // get removeSauceLabsBackpack () {
    //     return $('#remove-sauce-labs-backpack')
    // }

    // get removeSauceLabsBikeLight () {
    //     return $('#remove-sauce-labs-bike-light')
    // }

    // get removeSauceLabsBoltShirt () {
    //     return $('#remove-sauce-labs-bolt-t-shirt')
    // }

    // get removeSauceLabsFleece () {
    //     return $('#remove-sauce-labs-fleece-jacket')
    // }

    // get removeSauceLabsOnesie () {
    //     return $('#remove-sauce-labs-onesie')
    // }

    // get removeSauceLabsRedShirt () {
    //     return $('#remove-test.allthethings()-t-shirt-(red)')
    // }

    get shoppingCartBadge () {
        return $('.shopping_cart_badge')
    }

    randomIndex = Math.floor(Math.random() * this.inventoryItems.length)

    //addAllItems = [this.addSauceLabsBackpack, this.addSauceLabsBikeLight, this.addSauceLabsBoltShirt, this.addSauceLabsFleece, this.addSauceLabsOnesie, this.addSauceLabsRedShirt]

    async addOneRandomItem() { 
        let selectorItem = await this.addToCart(this.inventoryItems[this.randomIndex])
        await selectorItem.click()
        await expect(this.shoppingCartBadge).toBeExisting()
        let cartItem = await this.removeFromCart(this.inventoryItems[this.randomIndex])   
        await expect(cartItem).toExist() 
    //  const addAllItems = [this.addSauceLabsBackpack, this.addSauceLabsBikeLight, this.addSauceLabsBoltShirt, this.addSauceLabsFleece, this.addSauceLabsOnesie, this.addSauceLabsRedShirt]
    //     const cartItems = []

    //    const randomIndex = Math.floor(Math.random() * addAllItems.length) 
    //    const randomItem = addAllItems[randomIndex]
    //    await randomItem.click()
    //    await expect(this.shoppingCartBadge).toBeExisting()   
    //    await expect(cartItems[randomIndex]).toBeExisting() 
}

    async addAdditionalItems() {
        for (let i = 0; i < this.inventoryItems.length; i++) {
        if (i === this.randomIndex) continue;
        let selector = await this.addToCart(this.inventoryItems[i]);
        await selector.click();
        await expect(this.shoppingCartBadge).toBeExisting();
        let cartItem = await this.removeFromCart(this.inventoryItems[this.randomIndex])
        await expect(cartItem).toExist()     
        }
    }

    async removeAdditionalItems() {
        for (let i = 0; i < this.inventoryItems.length; i++) {
            if (i === this.randomIndex) continue;
            let selector = await this.removeFromCart(this.inventoryItems[i]);
            await selector.click();
            let cartItem = await this.addToCart(this.inventoryItems[this.randomIndex])
            await expect(cartItem).toExist() 
    }
}

}

export default new HomePage();
