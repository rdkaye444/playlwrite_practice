import { test, expect } from '@playwright/test';
import { ChewyHomePage } from './tests_src/chewy-home-page';
import { ChewyItemPage } from './tests_src/chewy-item-detail-page';


test('Select an item', async ({ page }) => {
    test.setTimeout(120000);
    const chewyHome = new ChewyHomePage(page);
    await chewyHome.goto();
    await chewyHome.search('royal canin veterinary diet for cats cans');
    await chewyHome.select_first_item();
  });

test('Add item twice to cart, card should display 2 items', async ({ page }) =>{
    test.setTimeout(120000);
    const chewyItem = new ChewyItemPage(page);
    await chewyItem.goto();
    await chewyItem.add_to_cart();
    await chewyItem.add_to_cart();
    await expect(page.getByTestId('cart-total-item')).toHaveText('Subtotal (2 items):')
});

test('Add item once to cart, card should display 1 item', async ({ page }) =>{
    const chewyItem = new ChewyItemPage(page);
    await chewyItem.goto();
    await chewyItem.add_to_cart();
    await expect(page.getByTestId('cart-total-item')).toHaveText('Subtotal (1 item):')
});