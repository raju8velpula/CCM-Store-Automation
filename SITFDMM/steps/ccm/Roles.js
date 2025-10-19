
// type=module
import { Given,setDefaultTimeout} from '@cucumber/cucumber'
import { UtilityLibrery } from '../../utils/UtilityLibrery.js';
import { LoginPage } from '../../pages/LoginPage.js';
import { ConfigurationManager } from '../../pages/ConfigurationManagerPage.js';
import { RolesPage } from '../../pages/RolesPage.js';

setDefaultTimeout(600000)
Given("I launch ccm application", async()=>{
    let utils=new UtilityLibrery();
    await utils.launchApplication('ccm');
    let loginPage=new LoginPage()
    await loginPage.loginToApplication()
})

Given("I navigate to the {string} page", async(configuration)=>{
    let cm=new ConfigurationManager()
    await cm.searchConfiguration(configuration)
})
 

Given("I select the user {string} on roles page", async(role)=>{
    let rolesPage=new RolesPage()
    await rolesPage.selectRoleForTheUserRole(role)
    
})

Given("I select the role option {string}", async(roleOption)=>{
    let rolesPage=new RolesPage()
    await rolesPage.selectTheRole(roleOption)
})

