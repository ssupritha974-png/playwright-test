import { LoginPage } from '../pages/LoginPage';
import { UserPage } from '../pages/UserPage';
import { test as baseTest } from './common-fixture';

type HooksFixtureType = {
 gotoUrl: ()=> Promise<void>;
 logout: ()=> Promise<void>;
};

export const test = baseTest.extend<HooksFixtureType>({
 gotoUrl: async ({ page }, use) => {
   const loginPage = new LoginPage(page);
   await loginPage.gotoOrangeHRM();
   await use(async()=>{});
 },
 logout: async ({ page }, use) => {
   const userPage = new UserPage(page);
   await userPage.logout();
   await use(async()=>{});
},
});
 
export{expect} from '@playwright/test';