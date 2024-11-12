const { defineConfig } = require("cypress");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const ExcelJs = require('exceljs');
const { error } = require("console");

// const browserify = require("@cypress/browserify-preprocessor");
// const {
//   addCucumberPreprocessorPlugin,
// } = require("@badeball/cypress-cucumber-preprocessor");
// const {
//   preprendTransformerToOptions,
// } = require("@badeball/cypress-cucumber-preprocessor/browserify");

// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await addCucumberPreprocessorPlugin(on, config);

//   on(
//     "file:preprocessor",
//     browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
//   );

//   require('cypress-mochawesome-reporter/plugin')(on);  
//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }


  async function setupNodeEvents(on, config) {
  
    require('cypress-mochawesome-reporter/plugin')(on);  
  
    on('task',{
        excelToJsonConverterTask(filePath)
        {
        const result = excelToJson({
          source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
        })
        return result; 
        }
        
      })

      on('task',{
        async writeExcelTest({searchText, replaceText, change, filePath, workSheet})

        {

          const workbook = new ExcelJs.Workbook();
          await workbook.xlsx.readFile(filePath);
          const worksheet = workbook.getWorksheet(workSheet);

          const output = await readExcel(worksheet, searchText);

          const cell = worksheet.getCell(output.row, output.column+change.colChange)
          cell.value = replaceText;
          
          //Resolving Promise : Pending, resolve, rejected
          return workbook.xlsx.writeFile(filePath).then(()=>{
            return true;
          }).catch((error)=>{
            return false;
          })

        }
      })  
    
    
    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
  
  }
  
  async function readExcel(worksheet, searchText)
  {
    let output = {row:-1, column:-1};
    worksheet.eachRow((row, rowNumber)=>
    {
        row.eachCell((cell, colNumber)=>
        {
          if(cell.value === searchText)
          {
            output.row=rowNumber
            output.column=colNumber
          }
        })      
    })
    return output;
  }

module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',

  env: {
    url: 'https://rahulshettyacademy.com'
  },

  retries: {
    runMode: 1      
  },

  e2e: {
    //Implement node event listeners here
    //Cucumber Plugin Registation
    // setupNodeEvents(on, config) {
    //   require('cypress-mochawesome-reporter/plugin')(on);
    // },   

    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js' 
  },
  
});
