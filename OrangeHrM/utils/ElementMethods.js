import { BrowserSingleton } from "./Browser.js";

class ElementMethods{

    constructor(page){
        this.page= page;        
    }

    async sendKeys(locator,str){
       let element= await this.getElement(locator)
        await  element.fill(str)
    }
    async click(locator){
        let element= await this.getElement(locator)
        await  element.click()
    }
    /**
     * 
     * @param {object} locator 
     */
    async getElement(locator){
        let page=await this.page
        switch (locator.locatorType.toLowerCase()) {
            case "css":
                let element= page.locator(locator.value);
                return element;
            default:
                break;
        }

    }

}
export {ElementMethods}