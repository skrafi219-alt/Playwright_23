import {test,expect} from '@playwright/test';

test("login TestCase", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client");
    await expect(page).toHaveTitle("Let's Shop");
    

});