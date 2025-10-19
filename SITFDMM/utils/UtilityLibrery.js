import { chromium } from "@playwright/test"
import PropertiesReader from 'properties-reader';
import path from 'path';
import { BrowserSingleton } from "./Browser.js";
export class UtilityLibrery{

  
    /**
     * @augments{string} headless
     */
    async luaunchBrowser(){
         let browser;
         let browserName=await this.getProperty('browser');
         let headless=await this.getProperty('headless')
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
            

            console.log("ytftiyftyiftyff")
        }
        let page =await browser.newPage();
        page.goto('hhtps://google.com')
}
  async getProperty(key) {
    const propertiesPath = path.resolve('configs/config.properties');
    const properties = PropertiesReader(propertiesPath);
    return properties.get(key);
}

    async launchApplication(app){
        let page=await new BrowserSingleton().getPage();
        await page.goto(await this.getProperty(app+'_url'),{ timeout: 100000, waitUntil: 'load' })
    }
}

