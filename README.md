# Feefo Technical Test

## Overview 

Welcome to my submission of the feefo technical test. In this project, you will see various end to end tests that have been written to test the functionality of the 'search merchant' field and the different dropdown menus that can be found on https://www.feefo.com/search-reviews/search-results. I have also written acceptance criteria in gherkin syntax for the thermostatic controller. The tests have been written using the Cypress IO test framework with TypeScript, Cucumber, npm, node, esbuild bundler and the chai sorted plugin. Below is a breakdown of the tasks I have completed: 

### Task 1

I have created a feature file in the e2e folder called 'searchMerchant.feature' and the accompanying step definition file is also located in the same folder and is called 'searchMerchant.ts'. I have written the tests in gherkin syntax and they test various scenarios of the search merchant field and the dropdown menus used to filter/sort the searches. I have covered the following functionality:

- When searching for a merchant, that only that merchant is returned in the search results.  
- When searching for a merchant, that the result contains the correct link to the merchants feefo page.
- When using the category dropdown and selecting the 'Animal & Pets' option, only search results of merchants from that industry are returned. 
• When using the star rating dropdown and selecting the '5 stars' option, only search results of merchants with that star rating are returned.
• When using the sort by dropdown and selecting the 'Rating (Low - High)' option, the search results are sorted by their star rating in Ascending order. 

### Task 3

I have created a feature file in the e2e folder called 'thermostat.feature'. In this I have defined acceptance criteria using the basic requirements set out in the tech tast documentation, these have been written using the gherkin syntax and I have used a Scenario outline with an Example table for different conditions of the test. I have also written the accompanying step definition file which is also located in the same folder and is called 'thermostat.ts'. For the purpose of this tech test I have returned 'pending' in the Given step of the tests so that Cypress knows not to run them and will mark them as pending.  

## Installation 

• Make sure that both node and npm are installed. I would recommend using the most recent version of node with LTS, this is currently v20.12.2. This will also come with a version of npm. I also recommend installing node using NVM, you can read about this here: https://nodejs.org/en/download/package-manager. This will allow you to control which versions of node you have installed and will give you the flexibility to run different versions of node should you need to. 
• Clone the repository from Github to a local folder on your machine.
• Install all dependencies from your folders root directory using 'npm install'. 
• To run the tests headlessly using my custom npm script you will also need to ensure chrome browser is installed. 

### Running the tests 

You can run the tests in two ways; either using the cypress app or headlessly where it will run via your terminal using the chrome browser. I have created custom npm scripts to do this in package.json. 

### Cypress app

To run the tests using the cypress app, open your terminal and ensure you are in your cypress folders root directory, then run 'npm run cy:open'. This will open the cypress app where you can run the tests from. 

### Headlessly with chrome browser 

To run the tests headlessly from your terminal, open your terminal and ensure you are in your cypress folders root directory, then run 'npm run cy:run'. This will run the tests headlessly in chrome browser without opening the cypress app. 

## Chai sorted plugin 

I have installed the chai sorted plugin so that I can make use of the sorted() method in an assertion in one of the tests. This has been installed as a dev dependency and imported into the support/e2e.ts file for use within any spec file of the project. 
