import addtocart from '../page_object/InventoryPage'

describe('Product Page Functionality', () => {
    beforeEach(() => {
        
        cy.Login_in_site('eashan2@gmail.com', 'Password@1234');
      
    })

    it('should allow a user to add an item to the cart', () => {
      
        const ad=new addtocart();
        ad.visitproduct();
        ad.clickonbluetop();
        ad.continueshop();
        ad.opencart();
        ad.verifybluetop();
        
    })
}) 