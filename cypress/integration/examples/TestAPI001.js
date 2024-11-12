
describe('API Securing Testing - Mock HTTP request',function(){

 it('Mock HTTP request for expectng 403 status code',function(){

   cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

   cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
   (req)=>{
    req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
   
    req.continue((res)=>{
        expect(res.statusCode).to.equal(403)
    })
    }

   ).as('dummyURL')

   cy.get("button[class='btn btn-primary']").click()
   cy.wait('@dummyURL')

 })

})