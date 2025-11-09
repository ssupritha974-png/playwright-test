import {test} from '../fixtures/hooks-fixture';
import { expect, Expect } from '@playwright/test';


test('temp test1', async({page,gotoUrl})=>{
console.log(await page.title());
});

test('temp test2', async({page,gotoUrl})=>{
await expect(page).toHaveTitle('OrangeHRM');
});

test('temp test3', async({page,gotoUrl, logout})=>{
await expect(page).toHaveTitle('OrangeHRM');
});














// test.beforeEach('Loading the page before every method', async({loginPage})=>{
// await loginPage.gotoOrangeHRM();
// });

// test.afterEach('logout the page after every method', async({userPage})=>{
// await userPage.userMenuButton.click();
// await userPage.logoutButton.click();
// });

//const decryptedUsername = commonUtils.decryptData(process.env.USER_NAME!);
//const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);

//console.log(process.env.BASE_URL);
//console.log(process.env.USER_NAME);
//console.log(process.env.PASSWORD);

//commonUtilsObj.encryptData('admin123');

//await loginPage.loginOrangeHRM(decryptedUsername,decryptedPassword);