class addtocart {
    // selector of page
    cssvisitproductpg = "a[href='/products']"
    cssclickonaddtocart = "a[href='/product_details/1']"
    csscontinue = "button[type='button']"
    cssgotocart = '.modal-content'
    cssverifybluetop = '#product-1 a[href*="product_details"]'

    visitproduct() {
        cy.get(this.cssvisitproductpg).click();
    }
    clickonbluetop() {
        cy.get(this.cssclickonaddtocart).click();
    }
    continueshop(){
        cy.get(this.csscontinue).click();
    }
    opencart(){
        cy.get(this.cssgotocart).should('be.visible');
        cy.get(this.cssgotocart).contains('View Cart').click();
    }
    verifybluetop(){
        cy.get(this.cssverifybluetop).should('contain', 'Blue Top');
    }
}
export default addtocart;