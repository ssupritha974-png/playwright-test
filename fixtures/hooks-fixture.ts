import { Page } from '@playwright/test';
import {test as baseTest} from '../fixtures/common-fixture';
import { LoginPage } from '../pages/LoginPage';
import { UserPage } from '../pages/UserPage';
 
type HooksFixtureType = {
 gotoUrl: ({ page }: { page: Page }, use: (r: any) => Promise<void>) => Promise<void>;
 logout: ({ page }: { page: Page }, use: (r: any) => Promise<void>) => Promise<void>;
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