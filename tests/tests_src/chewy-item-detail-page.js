exports.ChewyItemPage = class ChewyItemPage {
    constructor(page) {
        this.page = page;
    }

    async goto(url = 'https://www.chewy.com/royal-canin-veterinary-diet-adult/dp/274382') {
        await this.page.goto(url);
    }


    async add_to_cart() {
        await this.page.getByTestId('add-to-cart').click();
        await this.page.getByTestId('smartshelf').getByLabel('Close').click();
    }

}