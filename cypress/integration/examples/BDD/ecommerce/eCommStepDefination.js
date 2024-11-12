//const { Give, When, Then, And} = require("@badeball/cypress-cucumber-preprocessor");
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";


import HomePage from '../../../pageObjectsModel/homePage'
import ProductPage from '../../../pageObjectsModel/productPage'
/// <reference types="Cypress" />


const homePage = new HomePage()
const productPage = new ProductPage()


Given(' I open Ecommerce Page', ()=>{
  cy.visit(Cypress.env('url')+'/angularpractice/')
})

When('I add  items to cart',function(){
  
      homePage.getShopTab()

      this.data.product.forEach(function(element){
        cy.SelectProduct(element) 
      });  

      productPage.getCheckOutButton()
})

// When('Validate the total prices',()=>{
  
// //SCENARIO: Extract the checked product price, Sum the price and Compare with default given total Price
//   var sum=0
//   cy.get('tr td:nth-child(4) strong').each(($ele, index, $list)=>{
  
//   const amount = $ele.text()
//      var result = amount.split(" ")
//      result = result[1].trim()
//      sum = Number(sum)+Number(result)
//   }).then(function(){  //Resolved Promise due to JS follows synchonization
//    cy.log(sum) //Other wise out put will 0 as initilized at top
//   })
//   //Compare and Assert with Default total amount
//   cy.get('3h3 strong').then(function(ele){
//     const defaultAmount = ele.text()
//     var amountRes = defaultAmount.split(" ")
//     amountRes = amountRes[1].trim()
//     expect(Number(amountRes)).to.be.equal(sum)
//   })
// })


// Then('Select the county submit and verify ThankYou',()=>{
//   cy.contains('Checkout').click()
//       cy.get('#country').type('india')
//       cy.get('.suggestions > ul > li > a').click()
      
//       cy.get('.checkbox').click() //When element not clicable due other web element
//       cy.get('.ng-untouched > .btn').click()

      
//SECNARIO: Extract Text from locator AND Compare with sub Text
//       cy.get('.alert').then(function(ele){
//       const actualText = ele.text()
//       expect(actualText.includes('Success!')).to.be.true
//       })

// })


// When('I fill the form details',function(dataTable){

//    //Convert data Table into Multi Dimentional Array

//   homePage.getEditBox().type(dataTable.rawTable[1][0])  
//   homePage.getGender().select(dataTable.rawTable[1][1])
// })


// Then('validate the forms behaviour',function(){
//   homePage.getTwoWayDataBinding().should('have.value',this.data.name) 
// })


// And('select the Shop Page',()=>{
//   homePage.getShopTab()
// })