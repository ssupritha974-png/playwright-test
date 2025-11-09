import { Locator, Page } from "@playwright/test";

export class LeftNavigationPage{
    readonly page: Page;
    readonly pimLink: Locator;
    readonly orangeHRMLogo: Locator;
    readonly leftNavigationPanel: Locator;

    constructor(page:Page){
        this.page = page;
        this.pimLink = page.getByRole('link',{name:'PIM'});
        this.orangeHRMLogo = page.getByRole('link', {name: 'client brand banner'});
         this.leftNavigationPanel = page.locator('.oxd-sidepanel-body');
    }

    /**
     * To click onto the PIM module link from left navigation
     */
    async openPimModule(){
        await this.pimLink.waitFor({state:'visible', timeout:30000});
        await this.pimLink.click();
    }
}