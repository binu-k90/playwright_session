import{test,expect} from '@playwright/test'

test('Frames Test', async({page}) => {
    await page.goto('https://demoqa.com/frames')
    const sampleFrame =  page.frameLocator('#frame1')
    console.log(await sampleFrame.locator('#sampleHeading').textContent())
})