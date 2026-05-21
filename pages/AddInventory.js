export class AddInventory{

    constructor(page){
        this.page = page
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack')
    }

    async addBackPactToCart(){
        await this.addToCartButton.click()
        return this
    }
}