import { test } from '@playwright/test';

test('Bài học 3: Todo page', async ({ page }) => {

    await test.step('Go to https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click Bài học 3: Todo page', async () => {
        await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();
    });

    await test.step('Insert 100 todo', async () => {
        for (let i = 0; i <= 100; i++) {
        await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
        await page.locator('//button[@id="add-task"]').click();
        };
    });

    await test.step('Delete odd items', async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        });
        for (let i = 0; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }
        }
    });
});


