//<reference type="Cypress" />

describe('API Test Suit', function(){


   it('Modify API Post method to be disply only one row & Validate UI componenets',function(){
  
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

    cy.intercept({
        method: 'GET',
        url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    }, 
    {
        statusCode: 200,
        body: [{
         "book_name": "RestAssured with Java", 
         "isbn": "BSG", 
         "aisle": "2302"
        }]        
    }).as('bookRetrievals') //All Intercept method collect in variable

    cy.get("button[class='btn btn-primary']").click()
    cy.wait('@bookRetrievals')//Try to apply expicitly synchronize due to before UI validation
    //Resolving promise
  
    //UI Validtion text if only one record displyed
    cy.get('p').should('have.text','Oops only 1 Book available')
   })
   
//*****************length of the respnse array = rows of the table*****************

   it('Validate UI & API length of the respnse array = rows of the table',function(){
  
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

    cy.intercept({
        method: 'GET',
        url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    }, 
    {
        statusCode: 200,
        body: [{
         "book_name": "RestAssured with Java", 
         "isbn": "BSG", 
         "aisle": "2302"
        }]        
    }).as('bookRetrievals') //All Intercept method collect in variable

    cy.get("button[class='btn btn-primary']").click()
    cy.wait('@bookRetrievals').should(({request, response})=>// Once promise resolved it will two propeties response and request
    {
        cy.get('tr').should('have.length',response.body.length+ 1)
        
    })
    //Try to apply expicitly synchronize due to before UI validation
    //Resolving promise
  
    //UI Validtion text if only one record displyed
    cy.get('p').should('have.text','Oops only 1 Book available')
   })
      

})