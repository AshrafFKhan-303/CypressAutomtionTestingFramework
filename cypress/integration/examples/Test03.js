
describe ('Launch the browser',function(){     //Test suit -----Test01

    it('Second Test Launch the Browser',function(){  // Test Case
   
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.wait(2000)

      //Click on the Hidden Elment of web page
      //cy.get('#mouse-hover-content').invoke('show')
      
      cy.contains('Top').click({force:true})
      cy.url().should('include','top') 

       //Click on Radio button based on button values  
    //    cy.get("[value='radio1']").click().should('be.checked')
    //    cy.get('#alertbtn').click(
    
   //Handling pop up 
    //    cy.get("[value='Confirm']").click()
    //    )

       cy.on('window:alert',(str)=>{
          expect(str).to.equal('Hello , share this practice page and share your knowledge')
       })

   //Handle Window tab
   //cy.get('#opentab').click()   ----- Launch the url in nxt tab
   // cy.get('#opentab').invoke('removeAttr','target').click() 
   // cy.origin('https://www.qaclickacademy.com/',()=>{
   // cy.url().should('contains','qaclick')
   // })

   //Navigation on table ----- Add assert for table row values
   cy.get('tr td:nth-child(2)').each(($ele, index, $list) => {

      const text = $ele.text()
      if(text.includes('Python')){
         
         cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
            const priceText = price.text()
            expect(priceText).to.equal('25')
         })
       }
      }
       
      )}  
  )}
)  
