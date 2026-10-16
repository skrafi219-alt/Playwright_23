import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

test("login TestCase", async ({page})=>{
    
    await page.goto("https://rahulshettyacademy.com/client");
    const login=new LoginPage(page);

    await login.login("rafi.tgcs219@gmail.com","MBxanptFWYri5$k");

    
    //await expect(page).toHaveTitle("Let's Shop");
    

});