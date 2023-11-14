import { test, expect } from '@playwright/test';

test('test add to cart', async ({ page }) => {
  await page.goto('https://www.chewy.com/');
  await page.getByTestId('desktop-header').getByTestId('search').click();
  await page.getByTestId('desktop-header').getByTestId('search').fill('royal canin veterinary diet for cats cans');
  await page.getByTestId('desktop-header').getByTestId('search').press('Enter');
  await page.locator('.kib-product-image').first().click();
  await page.getByTestId('add-to-cart').click();
  await expect(page.getByRole('heading', { name: 'Added to Cart' })).toHaveText('Added to Cart')
});

test('test add to card check item count single item', async ({ page }) => {
  await page.goto('https://www.chewy.com/');
  await page.getByTestId('desktop-header').getByTestId('search').click();
  await page.getByTestId('desktop-header').getByTestId('search').fill('royal canin veterinary diet for cats cans');
  await page.getByTestId('desktop-header').getByTestId('search').press('Enter');
  await page.locator('.kib-product-image').first().click();
  await page.getByTestId('add-to-cart').click();
  await expect(page.getByTestId('cart-total-item')).toHaveText('Subtotal (1 item):')
});

test('test add to card check item count different item', async ({ page }) => {
  await page.goto('https://www.chewy.com/');
  await page.getByTestId('desktop-header').getByTestId('search').click();
  await page.getByTestId('desktop-header').getByTestId('search').fill('royal canin veterinary diet for dogs cans');
  await page.getByTestId('desktop-header').getByTestId('search').press('Enter');
  await page.locator('.kib-product-image').first().click();
  await page.getByTestId('add-to-cart').click();
  await expect(page.getByTestId('cart-total-item')).toHaveText('Subtotal (1 item):')
});

test('add two items to check item cart', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://www.chewy.com/');
  await page.getByTestId('desktop-header').getByTestId('search').click();
  await page.getByTestId('desktop-header').getByTestId('search').fill('royal canin veterinary diet for cats cans');
  await page.getByTestId('desktop-header').getByTestId('search').press('Enter');
  await page.locator('.kib-product-image').first().click();
  await page.getByTestId('add-to-cart').click();
  await page.getByTestId('smartshelf').getByLabel('Close').click();
  await page.getByTestId('desktop-header').getByTestId('search').fill('royal canin veterinary diet for dogs cans');
  await page.getByTestId('desktop-header').getByTestId('search').press('Enter');
  await page.locator('.kib-product-image').first().click();
  await page.getByTestId('add-to-cart').click();
  await expect(page.getByTestId('cart-total-item')).toHaveText('Subtotal (2 items):')
});