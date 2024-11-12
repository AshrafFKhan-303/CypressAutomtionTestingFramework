const neatCSV = require('neat-csv')

let productName;
describe('JWT - Token login Session',function(){

    it('is logged in though browser local stoage property', async()=>{

        cy.LoginAPI().then(function(){
            
            cy.visit('https://rahulshettyacademy.com/client/',
            {
                onBeforeLoad : function(window){
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })


        })

        cy.get(".card-body b").eq(1).then(function(ele){
            productName = ele.text()
        })
        cy.get('.card-body button:last-of-type').eq(1).click();
        cy.get('[routerlink*="cart"]').click()
        cy.contains('Checkout').click()
        cy.get('[placeholder*="Country"]').type('Ind')
        cy.get('.ta-results button').each(($ele, index, $list)=>
        {
            if($ele.text() === ' India')
            {
                cy.wrap($ele).click()
            }
        })
        cy.get('.action__submit').click();
        cy.wait(8000);
        cy.contains('Click To Download Order Details in CSV').click();
        
        cy.readFile(Cypress.config("fileServerFolder")+'/cypress/downloads/order-invoice_ashrafkhan78625.csv')
        .then(async (text)=>
        {
            const csv = await neatCSV(text)
            console.log(csv)
            const actualPoduct = csv[0]["Product Name"]
            expect(productName).to.equal(actualPoduct);
        })
    
    })

})