Feature: searching the string "selenium" on google.com

Scenario: search google.com for string "selenium" (1)
  Given I am on the google home page - one
  When I enter selenium string into the search element - one
  And I click Google Search button
  Then I should see results including the seleinumhq website - one

Scenario: search google.com for string "selenium" (2)
  Given I am on the google home page - two
  When I enter selenium string into the search element - two
  And I hit the RETURN key
  Then I should see results including the seleinumhq website - two
