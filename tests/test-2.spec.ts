import { test, expect } from '@playwright/test';
import { assert } from 'console';

test('test', async ({ page }) => {
  await page.goto('https://www.chewy.com/');
  await page.getByTestId('desktop-header').getByTestId('search').click();
  await page.getByTestId('desktop-header').getByTestId('search').fill('royal canin veterinary diet for cats cans');
  await page.getByTestId('desktop-header').getByTestId('search').press('Enter');
  await page.locator('.kib-product-image').first().click();
  await page.getByTestId('add-to-cart').click();
  await expect(page.getByRole('heading', { name: 'Added to Cart' })).toHaveText('Added to Cart')
});