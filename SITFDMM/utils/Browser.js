import { chromium } from "@playwright/test";
import { UtilityLibrery } from "./UtilityLibrery.js";

export class BrowserSingleton {

     constructor(){

        if(!BrowserSingleton.instance ){
            this.browser= this._launchBrowser();
            this.page= this.launchPage();
            BrowserSingleton.instance=this
        }
        return BrowserSingleton.instance;
    }
    async _launchBrowser(){
        let util=new UtilityLibrery()
            let browser;
                 let browserName=await util.getProperty('browser');
                 let headless=await util.getProperty('headless')
                if(browserName.toLocaleLowerCase().includes('chrome')){ 
                    browser= await chromium.launch({
                        channel:'chrome',
                        headless:headless 
                    })
                }
                if(browserName.toLocaleLowerCase().includes('edge')){ 
                    browser= await chromium.launch({
                        channel:'msedge',
                        headless:headless
                    })
                }
                 if(browserName.toLocaleLowerCase().includes('chromium')){ 
                    browser= await chromium.launch({
                        headless:headless
                    })
                }
        return browser;
    }
    async getBrowser(){
        return this.browser;
    }
    
    async launchPage(){
        let browser=await this.browser
        let page=await browser.newPage()
        page.setDefaultTimeout(60000)
        
        // page.getByRole('textbox')
        return page ;
    }
    async getPage(){
        console.log("")
        return this.page;
    }

   
}
