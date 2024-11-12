
import HomePage from '../pageObjectsModel/homePage'
import ProductPage from '../pageObjectsModel/productPage'
/// <reference types="Cypress" />

describe('Framewok Capability Suit: 1.SetUp Hooks, 2.Fixture(Data Driven Testing),3.Custom Cypress Command(Support.Commands.js)',function(){

//Implemented Data Diven Capability in Framework get data by fixtuer method    
   
  before(function(){
        cy.fixture('example').then(function(data){
        this.data=data
        })
    })

    before(function(){
      cy.fixture('example01').then(function(data01){
        this.data01=data01
      })
    })

    
  it('Data Driven Capability',function(){
    //cy.visit('https://rahulshettyacademy.com/angularpractice/' )

    cy.visit(Cypress.env('url')+'/angularpractice/')
    cy.wait(2000)

    //cy.get("input[name='name']:nth-child(2)").type(this.data.name)
    
    // cy.get('select').select(this.data.gender)
    
    // //Validate same enter data is reflecting over this text box
    // cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name) 
    
    //Validate text box attribute minlenght value is 2
    // cy.get("input[name='name']:nth-child(2)").should('have.attr', 'minlength', '2')
  
//********************** Page Object Model Design Pattern *************************/  

    const homePage = new HomePage()

    const productPage = new ProductPage()
//------- Home Page-----------------------------------------------------    
      homePage.getEditBox().type(this.data.name)
    
      homePage.getGender().select(this.data.gender)
    
    //Validate same enter data is reflecting over this text box
      homePage.getTwoWayDataBinding().should('have.value',this.data.name) 
  
      homePage.getShopTab()
//-------- Poduct Page --------------------------------------------------
      cy.SelectProduct('Blackberry')  
      cy.SelectProduct('Nokia Edge')  
      productPage.getCheckOutButton()

      // cy.contains('Checkout').click()
      // cy.get('#country').type('india')
      // cy.get('.suggestions > ul > li > a').click()
      
      // cy.get('.checkbox').click() //When element not clicable due other web element
      // cy.get('.ng-untouched > .btn').click()
      
      //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).') //Getting exta text along with existed text
 
//SECNARIO: Extract Text from locator AND Compare with sub Text
        // cy.get('.alert').then(function(ele){
        //   const actualText = ele.text()
        //   expect(actualText.includes('Success!')).to.be.true
        // })

//SCENARIO: Extract the checked product price, Sum the price and Compare with default given total Price
        var sum=0
        cy.get('tr td:nth-child(4) strong').each(($ele, index, $list)=>{
          
          const amount = $ele.text()
             var result = amount.split(" ")
             result = result[1].trim()
             sum = Number(sum)+Number(result)
        }).then(function(){  //Resolved Promise due to JS follows synchonization
           cy.log(sum) //Other wise out put will 0 as initilized at top
           })
        //Compare and Assert with Default total amount
        cy.get('3h3 strong').then(function(ele){
          const defaultAmount = ele.text()
          var amountRes = defaultAmount.split(" ")
          amountRes = amountRes[1].trim()
          expect(Number(amountRes)).to.be.equal(sum)
        })     
  
    })


  // it('Data Driven Capability ---- Select Product',function(){
  //   cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
  //   cy.wait(2000)

  //Build Cypress Custome Command / User Defined Function ----- At Support  ----- commands.js
   // cy.SelectProduct('Blackberry')

//4. Parametrize Test with Multiple data set *****************
  // this.data01.product.forEach(function(element){
  //   cy.SelectProduct(element) 
  // });  
   

//******************** Wrap the below whole code in one function / Custom command in Cyress Present nin Support Folder */    
    // cy.get('h4.card-title').each(($ele,index, $list)=>{

    //     if($ele.text().includes("Blackberry")){
    //         cy.get('button.btn').eq(index).click()
    //     }
    // })
   

//********************** Page Object Model Design Pattern *************************/  

      //const homePage = new HomePage()

    //   homePage.getEditBox().type(this.data.name)
    
    //   homePage.getGender().select(this.data.gender)
    
    // //Validate same enter data is reflecting over this text box
    //   homePage.getTwoWayDataBinding().should('have.value',this.data.name) 


      //Build Cypress Custome Command / User Defined Function ----- At Support  ----- commands.js
      // cy.SelectProduct('Blackberry')
   // })

}) 