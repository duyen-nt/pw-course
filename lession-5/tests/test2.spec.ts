import { test, expect } from '@playwright/test';
  
test('Bài học 2: Product page', async ({ page }) => {
    await test.step('Go to Bài hhttps://material.playwrightvn.com', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('CLick Bài học 2: Product page', async () => {
        await page.locator('//a[@href="02-xpath-product-page.html"]').click();
        //await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
    });

    await test.step('Add products to cart 1', async () => {
        await page.locator('//button[@data-product-id="1"]').dblclick();
    });

    await test.step('Add products to cart 2', async () => {
        await page.locator('//button[@data-product-id="2"]').click({clickCount: 3});
    });

    await test.step('Add products to cart 3', async () => {
        await page.locator('//button[@data-product-id="3"]').click();
    });
});
