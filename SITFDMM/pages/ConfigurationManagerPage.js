import { BrowserSingleton } from "../utils/Browser.js";
import { ElementMethods } from "../utils/ElementMethods.js";
import { UtilityLibrery } from "../utils/UtilityLibrery.js";

export class ConfigurationManager extends ElementMethods{

     constructor(){
        super(new BrowserSingleton().getPage())
        this.util=new UtilityLibrery()
        this.searchBoxLoc={locatorType:'byRole',role:'textbox', name:'Type to Search...'}
        this.searchOption={locatorType:'byText', text:'customOption'}
        
     }

     async searchConfiguration(configuration){
        await this.sendKeys(this.searchBoxLoc, configuration);
        this.searchOption.text=configuration;
        await this.click(this.searchOption);
     }



}