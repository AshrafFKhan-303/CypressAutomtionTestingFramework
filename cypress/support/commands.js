// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('SelectProduct', (productName) => {
    cy.get('h4.card-title').each(($ele, index, $list) => {

        if ($ele.text().includes(productName)) {
            cy.get('button.btn').eq(index).click()
        }
    })
})


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Create Command for login into application by explicitly adding auth token in cookies local storage
Cypress.Commands.add("LoginAPI", () => {

    cy.request('POST','https://rahulshettyacademy.com/api/ecom/auth/login',
        {"userEmail": "ashrafkhan78625@yahoo.com", "userPassword": "Arahul@123#" }).
        then(function(res) {
            expect(res.status).to.eq(200)
            Cypress.env('token',res.body.token); 
        })
})
