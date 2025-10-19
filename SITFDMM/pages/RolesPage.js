import { BrowserSingleton } from "../utils/Browser.js";
import { ElementMethods } from "../utils/ElementMethods.js";
import { UtilityLibrery } from "../utils/UtilityLibrery.js";

export class RolesPage extends ElementMethods{

     constructor(){
        super(new BrowserSingleton().getPage())
        this.roleLoc={locatorType:'byRole',role:'gridcell', name:'custom'}
        this.passwordTxtLoc={locatorType:'byRole',role:'textbox', name:'Password'}
        this.roleOptionLoc={locatorType:'xpath', value:`//li[contains(@title,'custom')]`}
     }

     async selectTheRole(role){
        this.roleLoc.name=role
        await this.doubleClick(this.roleLoc)
     }

     async selectRoleForTheUserRole(roleOption){
        let option=this.roleOptionLoc.value;
        this.roleOptionLoc.value=option.replace('custom', roleOption)
        let classAttribute=await this.getAttributeValue(this.roleOptionLoc, 'class')
        if(!classAttribute.includes('selected')){
            let roleOptionEle=await this.getElement(this.roleOptionLoc)
            await roleOptionEle.locator('//span[@class="check"]').click()
        }
     }

}