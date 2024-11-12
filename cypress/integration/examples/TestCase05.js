/// <reference types="Cypress" />

describe ('Handling IFRAME Handler',function(){
   it('Ifame Test Case',function(){
        cy.frameLoaded('courses-iframe')
        cy.iframe("a[href='mentorship']").eq(0).click() 
        cy.iframe().first("div[class='author']").should('have.length',7)

   })

})