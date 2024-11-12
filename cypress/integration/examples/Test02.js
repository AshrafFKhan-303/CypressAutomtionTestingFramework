

describe ('Launch the browser',function(){ //Test suit -----Test01

    it('Second Test Launch the Browser',function(){  // Test Case
   
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.wait(2000)             
       //cy.get('#checkBoxOption1').check() //Click on check box without Assertation/varigivation is checked
       cy.get('#checkBoxOption1').check().should('be.checked') //Assertion checked successfully
       cy.get('#checkBoxOption1').check().should('be.checked').end('have.value','option1') ////Assertion have been checked the respective check box
       cy.get('#checkBoxOption1').uncheck().should('not.be.checked').end('have.value','option1') ////Assertion have been unchecked 
       cy.get("input[type='checkbox']").check(['option1','option2'])

       //Select Dynamic Drop Down
       cy.get('#autocomplete').type('ind')
       cy.get('.ui-menu-item div').each(($ele, index, $list)=>{

        if($ele.text()==='India'){
            $ele.click()
        }
       })
       cy.get('#autocomplete').should('have.value','India')
       
       //Select Static drop down
       cy.get('select').select('option2').should('have.value','option2')

       //visiabel Unvisiable
       cy.get('#displayed-text').should('be.visible')
       cy.get('#hide-textbox').click()
       cy.get('#displayed-text').should('not.be.visible')
       cy.get('#show-textbox').click()
       cy.get('#displayed-text').should('be.visible')
       


    })
})   