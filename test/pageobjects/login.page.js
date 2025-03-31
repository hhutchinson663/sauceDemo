import { $ } from '@wdio/globals'
import Page from './base.js';
import { expect } from '@wdio/globals'
import HamburgerMenu from './hambugerMenu.page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('input[type="submit"]');
    }

    get epicSadFaceErrorLockOut () {
        return $('//h3[contains(text(),"Epic sadface: Sorry, this user has been locked out.")]')
    }

    get epicSadFaceIncorrectPassword () {
        return $('//h3[contains(text(),"Epic sadface: Username and password do not match any user in this service)]')
    }

    get problemImage () {
        return $('(//img[@src="/static/media/sl-404.168b1cce.jpg"])[1]')

    }
    
    users = ["standard_user", "problem_user", "performance_glitch_user", "error_user", "visual_user", "locked_out_user"]
  
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.moveTo();
        await this.btnLogin.click();
    }

    async negUserScenarios(password) {
        for (let i = 0; i < this.users.length; i++) {
        await this.login(this.users[i], password)
        await expect(this.inputPassword).toBeExisting()
        }
    }

    async posUserScenarios(password) {
    for (let i = 0; i < this.users.length; i++) {
        await this.login(this.users[i], password)
        if (this.users[i] == this.users[1]) {
            await expect(this.problemImage).toBeExisting()
        }
        if (this.users[i] == this.users[5]) {
            await expect(this.epicSadFaceErrorLockOut).toBeExisting()
            break
        }
    
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await HamburgerMenu.hamburgerMenuButton.click()
        await HamburgerMenu.logout.click()
        await expect(this.inputPassword).toBeExisting()
    }
    }
    
    open () {
        return super.open('');
    }
}

export default new LoginPage();
