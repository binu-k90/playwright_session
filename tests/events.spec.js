import{test,expect} from '@playwright/test'

test('Mouse Event', async ({page}) => {
    await page.goto('https://selenium.qabible.in/index.php')
    const otherMenu = await page.locator('#others').hover()
    await page.goto('https://selenium.qabible.in/drag-drop.php')
    //const rightClick = await page.locator("//span[text()='Draggable n°1']").click({button:'right'})
   //const doubleClick = await page.locator("//span[text()='Draggable n°2']").dblclick()
   const dragAndDrop = await page.locator("//span[text()='Draggable n°2']").dragTo(page.locator('#mydropzone'))
})