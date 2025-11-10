import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    readonly userNameInput:Locator;
    readonly passWordInput:Locator;
    readonly loginButton:Locator;
    readonly invalidCredErrorMsg:Locator;

    constructor(page:Page){
        this.page = page;
        this.userNameInput = page.locator('input[name="username"]');
        this.passWordInput = page.locator('input[name="password"]');
        this.loginButton = page.getByRole('button',{name:'Login'});
        this.invalidCredErrorMsg = page.getByRole('alert');
    }

    /**
     * To open and lanuch the page OrangeHRM
     */
    async gotoOrangeHRM(){
        await this.page.goto(process.env.BASE_URL!);
    }

    /**
     * To login into OrangeHRM 
     * @param username 
     * @param password 
     */

    async loginOrangeHRM(username:string, password:string){
        await this.userNameInput.fill(username);
        await this.passWordInput.fill(password);
        await this.loginButton.click();
    }


}