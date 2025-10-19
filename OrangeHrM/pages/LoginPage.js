import { BrowserSingleton } from "../utils/Browser.js";
import { ElementMethods } from "../utils/ElementMethods.js";
import { UtilityLibrery } from "../utils/UtilityLibrery.js";

export class LoginPage extends ElementMethods{

     constructor(){
        super(new BrowserSingleton().getPage())
        this.util=new UtilityLibrery()
        this.userNameTxtLoc={locatorType:'css', value:'input[name="username"]'}
        this.passwordTxtLoc={locatorType:'css', value:'input[name="password"]'}
        this.loginBtnLoc={locatorType:'css', value:'button[type="submit"]'}
     }

     async loginToApplication(){
        await this.sendKeys(this.userNameTxtLoc, await this.util.getProperty('username'))
        await this.sendKeys(this.passwordTxtLoc, await this.util.getProperty('password'))
        await this.click(this.loginBtnLoc)
     }



}