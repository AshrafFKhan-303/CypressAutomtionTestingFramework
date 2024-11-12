/// <reference types="Cypress" />


describe ('Launch the browser',function(){ //Test suit -----Test01

 it('First Test Launch the Browser',function(){  // Test Case

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    //cy.get('.search-keyword').type('ca') 
    cy.wait(2000)

    cy.get('.products').as('productsLocator')  //---->Aliasing to be reused the locator and centralized maintance
   
    //cy.get('.product').should('have.length',4) ----> Assertion willfail due to invisible elemet on web page
    
    //cy.get('.product:visible').should('have.length',4)  //-----> Filtering only visible elemet by visible element on should assertion
    
    //cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()  //---> Clicked value based on index 

    //Add to cart based on desired product name
    cy.get('@productsLocator').find('.product').each(($ele, index, $list)=>{

      const vegText=$ele.find('h4.product-name').text()
       if(vegText.includes('Brocolli')){
        cy.wrap($ele).find('button').click()
       }
    })
    cy.get("img[alt='Cart']").click()
    
    //cy.get('.action-block').find('button').contains('PROCEED TO CHECKOUT').click()
    //  or
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
    

    // cy.get('@productsLocator').find('.product').each(($ele , index, $list)=>{

    //   const vegText =  $ele.find('h4.product-name').text()
    //   if(vegText.includes('Carrot')){
    //     cy.wrap($ele).find('button').click().then(function(element){
    //      console.log('elemenmt clicked succe') 
    //     })
    //   }
    // })



  })  

})
    
    // cy.visit('https://google.com')
    // cy.get('#APjFqb').type('cakes').type('{enter}')
    // //cy.get('.LC20lb MBeuO DKV0Md').should('contains','Online Cake Delivery in Delhi')  
    // cy.get('.ylgVCe').contains(' › pages › cake-delivery-in-delhi').click()  //should('have.text','Cake')
  