import {test,expect} from '@playwright/test'

test('Visual Testing with Playwright', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.waitForLoadState('networkidle') //networkidle - everything is loaded properly(dom,network) so it waits until the network idle is stable
    await expect(page).toHaveScreenshot('loginpage.png',{threshold:0.2,maxDiffPixels:6700}) // loginpage.png - filename 
    //threshold - allows how much visual difference is allowed - 0 is very strict - no diff is allowed
    //0.1 is very small difference
    //0.2 small difference is allowed
    //1 is very large difference
    //maxDiffPixels - how much pixels is allowed 3000-7000 for smaller site
    //8000-15000 for larger site
})