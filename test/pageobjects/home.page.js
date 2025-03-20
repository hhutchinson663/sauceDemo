import { $ } from '@wdio/globals'
import Page from './base.js';

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
}

export default new HomePage();
