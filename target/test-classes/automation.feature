Feature: bright talk test

Background: homepage

Given I am on the home page

@test
Scenario Outline: buying women items
When I click on WOMEN tabs and select Size "<size>"
And I set the price range between "<PriceFrom>" - "<PriceTo>" using the slider
And the displayed items are within the price range "<PriceFrom>" - "<PriceTo>"
And I add any "<No>" items to shopping cart
And I click on Cart on the top right side
And I cick on checkout button 
Then the "<No>" added items should match the total price

Examples:
| size	| PriceFrom | PriceTo	| No 	|
| L	  	| $16		| $30.06	| 2		|