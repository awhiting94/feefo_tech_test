import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("The automatic switch is {string}", function (switchStatus) {
    return "pending";
});