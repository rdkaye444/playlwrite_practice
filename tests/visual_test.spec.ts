import {test, expect} from '@playwright/test'

test('The screenshots are the same', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://www.boardgamegeek.com');
    expect(page).toHaveScreenshot();
});

test('example test', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveScreenshot();
  });

  test('blue 2', async ({ page }) => {
    await page.goto('https://www.boardgamegeek.com');
    await expect(page).toHaveScreenshot();
  });