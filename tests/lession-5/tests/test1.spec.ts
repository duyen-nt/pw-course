import { test } from '@playwright/test';

const dataTest = {
  username: "Duyên",
  email: "duyennt1224@gmail.com",
  country: "usa",
  bio: "Duyên test",
  interest: "music",
  dob: "1995-09-19"
};

test('Bài học1: Register Page', async ({ page }) => {
  await test.step("Go to Bài học 1: Register Page", async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();
  });

  await test.step("Fill full informations", async () => {
    await page.locator('//input[@id="username"]').fill(dataTest.username);
    await page.locator('//input[@id="email"]').fill(dataTest.email);
    await page.locator('//input[@id="female"]').check();
    await page.locator('//input[@id="reading"]').check();
    await page.locator('//input[@id="traveling"]').check();
    await page.locator('//input[@id="cooking"]').check();
    await page.selectOption('//select[@id="interests"]', dataTest.interest);
    await page.selectOption('//select[@id="country"]', dataTest.country);
    await page.locator('//input[@id="dob"]').fill(dataTest.dob);
    await page.locator('//input[@id="profile"]').setInputFiles(`C:\Playwright\pw-course\tests\lession-5\tests\image.jpg`);
    //await page.locator('//input[@id="profile"]').setInputFiles(path.join(__dirname, 'myfile.pdf'));
    await page.locator('//textarea[@id="bio"]').fill(dataTest.bio);
    await page.locator('//input[@id="rating"]').fill('10');
    await page.locator('//div[@class="tooltip"]').hover();
    await page.locator('//input[@id="newsletter"]').check();
    await page.locator('//span[@class="slider round"]').click();
  });

  await test.step("Click btn Register", async () => {
    await page.click('//button[@type="submit"]');
  });
});
