Feature: searching strings on google.com

Scenario: search google.com for string "selenium" (1)
  Given I am on the google home page - one REFACTORED
  When I enter selenium string into the search element REFACTORED
  And I click Google Search button REFACTORED
  Then I should see results including the seleniumhq website REFACTORED

Scenario: search google.com for string "cucumber" (2)
  Given I am on the google home page - two REFACTORED
  When I enter cucumber string into the search element REFACTORED
  And I hit the RETURN key REFACTORED
  Then I should see results including the strings cucumber and javascript REFACTORED
