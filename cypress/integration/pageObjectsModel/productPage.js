
class ProductPage{

    getCheckOutButton(){
        return cy.contains('Checkout').click()
    }
}
export default ProductPage