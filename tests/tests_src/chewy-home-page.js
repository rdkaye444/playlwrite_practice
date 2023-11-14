const {expect} = require('playwright/test');

exports.ChewyHomePage = class ChewyHomePage{
    constructor(page) {
        this.page = page;
        this.search_box = page.getByTestId('desktop-header').getByTestId('search');
        this.first_item = page.locator('.kib-product-image').first();
    }

    async goto() {
        await this.page.goto('https://www.chewy.com');
    }

    async search(text) {
        await this.page.getByTestId('desktop-header').getByTestId('search').click();
        await this.page.getByTestId('desktop-header').getByTestId('search').fill(text);
        await this.page.getByTestId('desktop-header').getByTestId('search').press('Enter');
    }

    async select_first_item() {
       await this.page.locator('.kib-product-image').first().click();
    }
}
