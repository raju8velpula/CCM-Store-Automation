import { AfterAll, BeforeAll } from "@cucumber/cucumber";
import { BrowserSingleton } from "../utils/Browser.js";

Before(async ()=>{
     let page=await new BrowserSingleton().getPage();
})

After(async()=>{
    let page=await new BrowserSingleton().getPage();
    await page.close()
})
