import { $ } from '@wdio/globals'
import Page from './base.js';

class HamburgerMenu extends Page {
    /**
     * define selectors using getter methods
     */
    get hamburgerMenuButton () {
        return $('.bm-burger-button');
    }

    get logout () {
        return $('#logout_sidebar_link');
    }
}
export default new HamburgerMenu();