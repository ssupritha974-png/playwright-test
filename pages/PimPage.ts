import { Locator, Page } from "@playwright/test";

export class PimPage{
    readonly page: Page;
    readonly addPimBtn : Locator;
    readonly firstNameInput : Locator;
    readonly midNameInput : Locator;
    readonly lastNameInput : Locator;
    readonly saveButton : Locator;
    readonly newEmpNameHeading : Locator;

    constructor(page:Page){
        this.page = page;
        this.addPimBtn = page.getByRole('button',{name: 'Add'});
        this.firstNameInput = page.getByRole('textbox', {name: 'First Name'});
        this.midNameInput = page.getByRole('textbox', {name: 'Middle Name'});
        this.lastNameInput = page.getByRole('textbox', {name: 'Last Name'});
        this.saveButton = page.getByRole('button', {name: 'Save'});
        this.newEmpNameHeading = page.locator('.orangehrm-edit-employee-name');


    
    }

    /**
     * To add a new employee in PIM module
     * @param fName 
     * @param mName 
     * @param lName 
     */

    async addEmployee(fName: string, mName: string,lName: string){
        await this.addPimBtn.click();
        await this.firstNameInput.fill(fName);
        await this.midNameInput.fill(mName);
        await this.lastNameInput.fill(lName);
        await this.saveButton.click();
    }
    
}