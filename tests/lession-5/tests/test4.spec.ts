import {test} from '@playwright/test'

test('Bài học 4: Personal notes', async ({ page }) => {
    let titles, contents;

    await test.step('Retrieve data from the VnExpress website', async () => {
        await page.goto('https://vnexpress.net/khoa-hoc', { 
            waitUntil: 'networkidle',
            timeout: 120000,
         });
       // await page.waitForLoadState('networkidle'),
       // test.setTimeout(480000);
        titles = await page.locator('//h3[@class="title-news"]').allTextContents();
        contents = await page.locator('//p[@class="description"]').allTextContents();
    });

    await test.step('Go to https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click Bài học 4: Personal notes', async () => {
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    });

    await test.step('Add 10 new notes with contents of title and a short part', async () => {
        for (let i = 0; i < 10; i++) {
            await page.locator('//input[@id="note-title"]').fill(titles[i]);
            await page.locator('//textarea[@id="note-content"]').fill(contents[i]);
            await page.locator('//button[@id="add-note"]').click();
        }
    });

    await test.step('Search note', async () => {
        await page.locator('//input[@id="search"]').fill('Việt Nam');
    });
});


