import {test, expect} from '../fixtures/hooks-fixture';
import pimModuleData from '../data/pim-module-data.json';


test('PIM-To verify a new employee is successfully created under PIM module',async({gotoUrl,pimPage,leftNavPage,loginPage})=>{
    await test.step('Open PIM Module',async()=>{
        await leftNavPage.openPimModule();
    })
    
     await test.step('Add employee in PIM module and verify',async()=>{
        await pimPage.addEmployee(pimModuleData.first_name,pimModuleData.middle_name, pimModuleData.last_name);
        await expect(pimPage.newEmpNameHeading).toHaveText(`${pimModuleData.first_name} ${pimModuleData.last_name}`);
     })
    
});
