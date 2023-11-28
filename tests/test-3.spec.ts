import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.chewy.com/');
  await page.getByTestId('desktop-header').getByTestId('search').click();
  await page.getByTestId('desktop-header').getByTestId('search').fill('canned cat food');
  await page.getByTestId('desktop-header').getByTestId('search').press('Enter');
  await page.locator('.kib-product-image').first().click();
  await page.getByTestId('add-to-cart').isVisible()
  await page.getByTestId('add-to-cart').click();
  await page.getByTestId('cart-total-item').isVisible();
  await expect(page.getByTestId('cart-total-item')).toHaveText('Subtotal (1 item):');
});

