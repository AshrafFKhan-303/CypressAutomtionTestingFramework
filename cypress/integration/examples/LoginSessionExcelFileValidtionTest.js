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
        //cy.get('.order-summary button').contains('Excel').click();
    
        const filePath = Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_ashrafkhan78625.xlsx";
        
        //Calling added task in config.js , (<taskNme>, <paameter_Name>)
        // //Note: By Added task() telling cypress use node enginee due file opertion
        
        //Traverce file for specific rows and get text
        // cy.task('excelToJsonConverterTask', filePath).then(function(result)
        // {
        //     cy.log(result);
        //     cy.log(result.data[1].A);
        //     expect(productName).to.equal(result.data[1].B);

        // })
        
        //Get file property by readFile() irrespective of place
        cy.readFile(filePath).then(function(text){
            expect(text).to.include(productName);
            //cy.log(text)
        })
        
    })
})