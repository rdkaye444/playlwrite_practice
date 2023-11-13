import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://boardgamegeek.com/');
  await page.getByRole('link', { name: 'Explore' }).click();
  await page.getByRole('button', { name: 'Browse' }).click();
  await page.getByRole('button', { name: 'Forums' }).click();
  await page.getByRole('button', { name: 'GeekLists' }).click();
  await page.getByRole('button', { name: 'Shopping' }).click();
  await page.getByRole('button', { name: 'Community' }).click();
  await page.getByRole('button', { name: 'Help' }).click();
  await page.locator('span').filter({ hasText: 'Glossary' }).click();
});