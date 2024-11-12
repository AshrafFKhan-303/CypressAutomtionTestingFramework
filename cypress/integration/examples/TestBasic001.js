
/// <reference types="Cypress" />

describe('Suite 001 - Basics methods: should(), find(), eq(), contains()',function(){

    it("TestCase 01: should('have.length',5)",function(){
    //  cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      //cy.wait(2000)
      //cy.get("input[type='search']").type('ca')
      //cy.get('.product').should('have.length',4) //Assertion Failed due to invisiable web elemnet with id product

      //cy.get('.product:visible').should('have.length',4)// Assertion passed due to added attribure in get method :visible

      //cy.get('.products').find('.product').should('have.length',4)//Assertion passed due to added find() method
      //find(): method which defines the scope of locators on web page to Parent element to Child

      //Pick the 2nd card and Add to Cart
      //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

      //eq(<number>) : method returns the respective locators based on index give from list of web element


      //Iterate the products list ----- and select the respective one
    //   cy.get('.products').find('.product').each(($ele, index, $list)=>{

    //         const vegText = $ele.find('h4.product-name').text()

    //         if(vegText.includes('Carrot')){
    //             cy.wrap($ele.find('button')).click()
    //         }
    //     })
    })


//----------------- Checked Box Operations----------------------------

    it("TestCase 02: check() method be.checked() ,Assertion cancation by .end() method, have.value)",function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(2000)

        //Click on Checkbox and Assert is checked
            //cy.get('#checkBoxOption1').check().should('be.checked')

        //Click on Checked box and Assert is Unchecked
            //cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    
        //Click on Multiple Checked Box at a time
            //cy.get("input[type='checkbox']").check(['option1','option2','option3'])

        //UnClick on Multiple Checked Box at a time
            //cy.get("input[type='checkbox']").uncheck(['option1','option2','option3'])

        //Multiple Assertion Ckeced and Respective Checked box checked
            //cy.get('#checkBoxOption1').check().should('be.checked').end('have.value','option1')

        //Note: should Assertion be.check/uncheked ---- be for asserting the element State
          //   have.value/lenght === tobe assert the property of elements


//===================== Static Drop DOWN Opeations=============================
    //     cy.get('select').select('Option2').should('have.value','option2')

    
//********************* Dynamic Drop Down Operations **************************
        // cy.get('#autocomplete').type('ind')
        // cy.get(".ui-menu-item div").each(($ele,index, $list)=>{

        //     if($ele.text()==='India'){
        //         $ele.click()
        //     }
        // })
    
//********************** Handle Child Window ---Launch Another Application in Same window by invoke(removeAttr) function*/

        // cy.get('#opentab').invoke('removeAttr','target').click()
        // cy.origin('https://www.qaclickacademy.com/', ()=>{
        // cy.get("#navbarSupportedContent a[href='about.html']").click()
        // })
    
//********************** Handle operation on Table Iterate First Coloum and get respective Row next column value ************
        cy.get('tr td:nth-child(1)').each(($ele, index, $list)=>{
            const text = $ele.text()
            if(text.includes("Ben")){
                cy.get('tr td:nth-child(1)').eq(index).next().then(function(ele){

                    const position = ele.text()
                    expect(position).to.equal('Mechanic')
                })
            }

        })


    })


})  