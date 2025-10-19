
// type=module
import { Given,setDefaultTimeout} from '@cucumber/cucumber'
import {UtilityLibrery} from '../utils/UtilityLibrery.js'
import { LoginPage } from '../pages/LoginPage.js'
setDefaultTimeout(600000)
Given("Launch application", async()=>{
    let utils=new UtilityLibrery();
    await utils.launchApplication();
})

Given("Login to application", async()=>{
    let loginPage=new LoginPage()
    await loginPage.loginToApplication()
})
 