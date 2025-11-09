import {test as baseTest} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { UserPage } from '../pages/UserPage';
import { LeftNavigationPage } from '../pages/LeftNavigationPage';
import { PimPage } from '../pages/PimPage';

type PomFixturesType = {
    loginPage:LoginPage;
    dashboardPage:DashboardPage;
    userPage:UserPage;
    leftNavPage: LeftNavigationPage;
    pimPage: PimPage;
};

export const test = baseTest.extend<PomFixturesType>({
    loginPage: async({page},use)=>{
    const loginPage = new LoginPage(page);
    await use(loginPage);
    },

    dashboardPage:async({page},use)=>{
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },

    userPage:async({page},use)=>{
        const userPage = new UserPage(page);
        await use(userPage);
    },


    leftNavPage:async({page},use)=>{
        const leftNavPage = new LeftNavigationPage(page);
        await use(leftNavPage);
    },
    
     pimPage:async({page},use)=>{
        const pimPage = new PimPage(page);
        await use(pimPage);
    } 

});

export{expect} from '@playwright/test';