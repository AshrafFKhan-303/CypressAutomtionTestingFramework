/// <reference types="Cypress" />

describe ('Child Window Handler',function(){

   it('Child Window Handler',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.wait(2000)
    
    cy.get('#opentab').then(function(ele){
        const link = ele.prop('href')
        cy.visit(link)
        cy.origin(link, ()=>
        {
           cy.get("div.sub-menu-bar a[href='about.html']").click()
        }) 
       })
    })
   })

