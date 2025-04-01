import { $ } from '@wdio/globals'
import Page from './base.js';
import { expect } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    get swagLabHeader () {
        return $('.app_logo');
    }

    get shoppingCartBadge () {
        return $('.shopping_cart_badge')
    }

    inventoryItems = ["sauce-labs-backpack", "sauce-labs-bike-light", "sauce-labs-bolt-t-shirt", "sauce-labs-fleece-jacket", "sauce-labs-onesie", "test.allthethings()-t-shirt-(red)"]

    randomIndex = Math.floor(Math.random() * this.inventoryItems.length)

    async addToCart(item) {
        return $(`[id="add-to-cart-${item}"]`)
    }

    async removeFromCart(item) {
        return $(`[id="remove-${item}"]`)
    }

    async addOneRandomItem() { 
        let selectorItem = await this.addToCart(this.inventoryItems[this.randomIndex])
        await selectorItem.click()
        await expect(this.shoppingCartBadge).toBeExisting()
        let cartItem = await this.removeFromCart(this.inventoryItems[this.randomIndex])   
        await expect(cartItem).toExist() 
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
