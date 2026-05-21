Feature: Inventory Page
Scenario: Verify inventory items count for different users
Given User is on application loginpage
When User logs in with username "<Username>" and password "<Password>"
Then User should see "<result>"
And Inventory item count should be "<count>"

Examples:
     |Username       |Password      |result        |count|
     |standard_user  |secret_sauce  |Inventory Page| 6   |
     |problem_user   |secret_sauce  |Inventory Page| 6   |
     |locked_out_user|secret_sauce  |Error Message | 0   |
