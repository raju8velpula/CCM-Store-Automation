import { AfterAll, BeforeAll } from "@cucumber/cucumber";
import { BrowserSingleton } from "../utils/Browser.js";

BeforeAll(async ()=>{
     let page=await new BrowserSingleton().getPage();
})

AfterAll(async()=>{
    let page=await new BrowserSingleton().getPage();
    await page.close()
})
