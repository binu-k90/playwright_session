import{test,expect} from '@playwright/test'
//when multiple window is handled we need to context fixture as well page -> handles current tab, context -> handles the multiple window
test('MultipleWindowHandling In Playwright', async({page,context}) => {
    await page.goto('https://demo.guru99.com/popup.php')
    //waitforevent - waits for a new tab/window to open 
    //Before the action is performed we should call waitforevent 
    const popup =  context.waitForEvent('page')
    const clickHere = page.locator("//a[text()='Click Here']")
    await clickHere.click()
    const newpopup = await popup // created to get the new window
    //waits for the entire page to load
    await newpopup.waitForLoadState()
    const emailid = newpopup.locator("//input[@name='emailid']")
    const submit = newpopup.locator("//input[@name='btnLogin']")
    await emailid.fill("learn@obs.com")
    await submit.click()
})    