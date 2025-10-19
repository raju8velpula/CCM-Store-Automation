import { BrowserSingleton } from "./Browser.js";

class ElementMethods{

    constructor(page){
        this.page= page;        
    }

    async sendKeys(locator,str){
       let element= await this.getElement(locator)
        await  element.first().fill(str)
    }
    async click(locator){
        let element= await this.getElement(locator)
        await  element.first().click()
    }
    async doubleClick(locator){
        let element= await this.getElement(locator)
        await  element.first().dblclick()
    }

    async getAttributeValue(locator, attribute){
        let element= await this.getElement(locator)
        let text= await  element.first().getAttribute(attribute)
        return text;
    }
    /**
     * 
     * @param {object} locator 
     */
    async getElement(locator){
        let page=await this.page
        let element;
        switch (locator.locatorType.toLowerCase()) {
            case "bycss":
                 element= page.locator(locator.value);
                return element;
            case "byrole":
                 element = page.getByRole(locator.role, { name: locator.name });
                return element;
            case "bytext":
                 element = page.getByText(locator.text);
                return element;
            default:
                break;
        }

    }

}
export {ElementMethods}