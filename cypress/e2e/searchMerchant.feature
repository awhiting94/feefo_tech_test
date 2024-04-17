Feature: Search Merchant

    Scenario: Search merchant should only return one match based on users input
        Given I visit the search results page
        When I type a merchant into the search box
        Then The correct result should be returned

    Scenario: Search result should include link to merchants feefo page
        Given I visit the search results page
        When I type a merchant into the search box
        Then The search result should contain link to merchants feefo page

    Scenario: User can filter merchants by category
        Given I visit the search results page
        When I select an option from the category dropdown
        Then The search result is filtered by category

    Scenario: User can filter merchants by star rating
        Given I visit the search results page
        When I select an option from the star rating dropdown
        Then The search result is filtered by star rating

    Scenario: User can sort merchants by rating (low - high)
        Given I visit the search results page
        When I select the option from the sort by dropdown
        Then The search result is sorted by star rating ascending