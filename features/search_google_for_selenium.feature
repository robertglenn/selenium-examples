Feature: searching strings on google.com

Scenario: search google.com for string "selenium" (1)
  Given I am on the google home page - one
  When I enter selenium string into the search element
  And I click Google Search button
  Then I should see results including the seleniumhq website

Scenario: search google.com for string "cucumber" (2)
  Given I am on the google home page - two
  When I enter cucumber string into the search element
  And I hit the RETURN key
  Then I should see results including the strings cucumber and javascript
