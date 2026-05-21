@smoke
Feature: Login Functionality

Scenario: Login with valid credentials
Given User is on login page
When  User enters valid username and valid password
And User clicks on login button
Then User should be redirected to the Inventory page

@smoke
Scenario: Login with valid username and invalid password
Given User is on login page
When  User enters valid username "standard_user" and invalid password "wrong_password"
And User clicks on login button
Then User should see an error message