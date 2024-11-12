
   describe('Donload - Update - Upload Excel File', ()=>{

    it('verify excel download update and upload', ()=>{

        const replacePriceNum = '150';
        const workSheetName = 'Sheet1';
        const searchTextItem = 'Kivi';
        const FilePath = Cypress.config("fileServerFolder")+"/cypress/downloads/download.xlsx";
    
        cy.visit('https://rahulshettyacademy.com/upload-download-test/index.html')
        cy.get('#downloadButton').click();

        //Download Excel File and Updted
        cy.task('writeExcelTest', {searchText:searchTextItem, replaceText:replacePriceNum, change:{rowChange:0, colChange:2}, filePath:FilePath, workSheet:workSheetName } )
    
        //Upload Excel File after updated
        cy.get('#fileinput').selectFile(FilePath);
    
        //Validate Table data after updated
        cy.contains(searchTextItem).parent().parent().find("#cell-4-undefined").should('have.text',replacePriceNum);
    })


})