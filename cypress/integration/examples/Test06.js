/// <reference types="Cypress" />

describe ('Calender Handling Suit',function(){

    it('Calender Test caese - Select Data Monthand Year',function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.wait(2000)

        const date = '15'
        const month = '6'
        const year = '2025'

        const expectedDateList = [month,date,year]
        
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains('button',year).click()
        cy.get('.react-calendar__year-view__months__month').eq(Number(month)-1).click()
        cy.contains('abbr',date).click()
        
        //Asserton
        cy.get('.react-date-picker__inputGroup__input').each(($ele, index, $list)=>{

            cy.wrap($ele).invoke('val').should('eq',expectedDateList[index])
            // cy.wrap($ele).invoke('val').then(function(el){
            //     cy.log(el)
        })

    })

})