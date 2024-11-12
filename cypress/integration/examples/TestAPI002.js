describe('API - POST method end point testing',function(){

 it('API endpoint Test - POST method',function(){

    cy.request('POST','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
    {
        "book_name": "RestAssured with Java", 
        "isbn": "BSG", 
        "aisle": "2302"
       
    }).then(function(res){
        //expect(res.body).to.have.property(["Msg","successfully added"])

        expect(res.status).to.eq(200)
    })

 })



})