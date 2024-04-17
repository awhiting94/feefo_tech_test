import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the search results page", () => {
  cy.visit('https://www.feefo.com/search-reviews/search-results');
});

When("I type a merchant into the search box", () => {
  cy.get('[data-aqa-id="resource-filter-search-input-box"]')
    //Asserting that the input field is visible before typing a text string into it.
    .should('be.visible')
    .type('Novuna Personal');
});
//Opening the category dropdown and clicking the Animal and Pets option 
When("I select an option from the category dropdown", () => {
  cy.get('[data-aqa-id="category-dropdown-options"]').click();
  cy.get('[data-testid="Animal & Pets"]').click();
});

When("I select an option from the star rating dropdown", () => {
  cy.get('[data-aqa-id="star-rating-dropdown-options"]').click();
  cy.get('[data-testid="5 stars "]').click();
});

When("I select the option from the sort by dropdown", () => {
  cy.get('[data-aqa-id="sort-by-dropdown-options"]').click();
  cy.get('[data-testid="Rating - (Low - High)"]').click();
});

Then("The correct result should be returned", () => {
  cy.url().should('include', 'q=Novuna+Personal');
  cy.get('[data-aqa-id="card-base-item"]')
    // Doing a multiple assertion on the search result returned to validate that only one merchant has been returned and that it contains the name I searched with in the input field.
    .should(($card) => {
      expect($card).to.have.length(1)
      expect($card).to.contain('Novuna Personal')
    });
});
// Validating that the href attribute contains the correct link to the merchants feefo page 
Then("The search result should contain link to merchants feefo page", () => {
  cy.get('[data-aqa-id="card-base-item"]').contains('Novuna Personal').should('have.attr', 'href', 'https://www.feefo.com/reviews/novuna-personal-finance');
});

Then("The search result is filtered by category", () => {
  //Validating that the Request url contains the expected search parameters needed for a successful GET Request method to return the correct data based on the filter I have chosen. 
  cy.url().should('include', 'industry=ANIMAL_PETS');
  cy.get('[data-aqa-id="card-base-item"]')
    //Iterating through each search result to assert that each merchant has the correct industry displayed. 
    .each(($card) => {
      expect($card).to.contain('Animal & Pets');
    });
});

Then("The search result is filtered by star rating", () => {
  cy.url().should('include', 'star-rating=%5B5+TO+5%5D')
  cy.get('[data-aqa-id="card-base-item"]')
    .each(($card) => {
      cy.wrap($card).within(() => {
        cy.get('svg[data-icon="star"]')
          // Iterates through all five stars on each search result to assert that all 5 have the correct attribute which displays the yellow fill colour to highlight the star rating out of 5. In future I would build this out so that it could work for any star rating selection and not just for merchants with 5 stars.
          .each(($star) => {
            cy.wrap($star).within(() => {
              cy.get('path').should('have.attr', 'd', 'M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z');
            })
          })
          //Whilst iterating through each search result this asserts that five stars are displayed. 
          .should('have.length', '5');
      })
    })
});

Then("The search result is sorted by star rating ascending", () => {
  cy.url().should('include', 'sort-by=stars+asc');
  const list = [];
  cy.get('[data-aqa-id="card-base-item"]')
    // Iterating through each merchant in the search results and then iterating through the last span element which contains the star rating of each search result, I then convert this text value to an integer so that I can use the sorted() method later on and store them in an array. I now have an array of each merchant's star rating on the page which is indexed by their appearance in the search results. I can then assert whether this order is ascending using the sorted() method in the chai sorted plugin I have imported.  
    .each(($card) => {
      cy.wrap($card).within(() => {
        cy.get('span').last()
          .each(($el) => {
            list.push(parseInt($el.text()));
          })
      })
    })
    .wrap(list).then(($list) => {
      //This sorted() method from the imported chai plugin is beng used in the assertion to check whether the order of the star ratings in the array (the order they are displayed in the search results) is in Ascending order with the lowest star rated merchants being displayed first.    
      expect(list).to.be.sorted();
    })
});

