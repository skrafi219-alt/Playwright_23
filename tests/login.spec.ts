import {expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {test} from '../fixtures/fixtures';

test("login TestCase", async ({page,loginPage})=>{
    
    await page.goto("https://rahulshettyacademy.com/client");
    

    await loginPage.login("rafi.tgcs219@gmail.com","MBxanptFWYri5$k");

    
    //await expect(page).toHaveTitle("Let's Shop");
    

});