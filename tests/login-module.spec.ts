import {test,expect} from '../fixtures/hooks-fixture';
import loginModuleData from '../data/login-module-data.json';

test.use({storageState:{
    cookies: [],
    origins:[]
}
});

   test('Login:To verify the user cannot login with invalid password',{
    tag:['@UI', '@UAT'],
    annotation: {
        type: 'Test Case link',
        description: 'link of the testcase'
    }
    },async({gotoUrl, loginPage, commonUtils})=>{
    const username = commonUtils.decryptData(process.env.USER_NAME!);
    await loginPage.loginOrangeHRM(username,loginModuleData.invalid_password);
    await expect(loginPage.invalidCredErrorMsg).toHaveText(loginModuleData.invalid_cred_text);
    await expect(loginPage.userNameInput).toBeVisible();
});

test.describe('Invalid Login test',{
    tag:'@Invalid Login',
    annotation:{
        type: 'Story link',
        description:'Link of story'
    }
},()=>{
test('Login:To verify the user cannot login with invalid username',{tag:['@UI', '@UAT']},async({gotoUrl, loginPage, commonUtils})=>{
    const password = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPage.loginOrangeHRM(loginModuleData.invalid_username,password);
    await expect(loginPage.invalidCredErrorMsg).toHaveText(loginModuleData.invalid_cred_text);
    await expect(loginPage.userNameInput).toBeVisible();
});

test('Login:To verify the user cannot login with invalid username & password',{tag:['@UI', '@UAT']},async({gotoUrl, loginPage, commonUtils})=>{
    await loginPage.loginOrangeHRM(loginModuleData.invalid_username,loginModuleData.invalid_password);
    await expect(loginPage.invalidCredErrorMsg).toHaveText(loginModuleData.invalid_cred_text);
    //await expect(loginPage.invalidCredErrorMsg).toHaveText("qwerty");
    await expect(loginPage.userNameInput).toBeVisible();
}); 
});


test('Login:Sucessful login with valid username & password',{
    tag:['@UI', '@VISUAL'],
        annotation:{
            type:'Test case link',
            description: 'link'
        }
    },async({gotoUrl, loginPage, commonUtils, leftNavPage})=>{
    const username = commonUtils.decryptData(process.env.USER_NAME!);
    const password = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPage.loginOrangeHRM(username,password);
    await expect(leftNavPage.orangeHRMLogo).toHaveScreenshot('OrangeHrmBrandLogo.png');
    await expect(leftNavPage.leftNavigationPanel).toHaveScreenshot('LeftNavPanel.png');
});

