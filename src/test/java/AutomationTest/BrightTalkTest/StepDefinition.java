package AutomationTest.BrightTalkTest;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	
	HomePage homepage = new HomePage();
	WomenTabs womentabs = new WomenTabs();
	

	@Given("^I am on the home page$")
	public void i_am_on_the_home_page() {
	   homepage.homePageTitle();
	}
	@When("^I click on WOMEN tabs and select Size \"([^\"]*)\"$")
	public void i_click_on_WOMEN_tabs_and_select_Size(String size) {
	    homepage.womenTabs();
	    womentabs.selectSize(size);
	}
	@When("^I set the price range between \"([^\"]*)\" - \"([^\"]*)\" using the slider$")
	public void i_set_the_price_range_between_using_the_slider(String pricefrom, String priceto) {
	    womentabs.priceSliderFromAndTo(pricefrom, priceto);
	}
	@When("^the displayed items are within the price range \"([^\"]*)\" - \"([^\"]*)\"$")
	public void the_displayed_items_are_within_the_price_range(String pricefrom, String priceto) {
	   
	}
	@When("^I add any \"([^\"]*)\" items to shopping cart$")
	public void i_add_any_items_to_shopping_cart(String No) {
	  womentabs.addItem(No);
	  womentabs.layercartclose();
	}
	@When("^I click on Cart on the top right side$")
	public void i_click_on_Cart_on_the_top_right_side() {
	   womentabs.viewshoppingcart();
	}

	@When("^I cick on checkout button$")
	public void i_cick_on_checkout_button() {
	   
	}
	@Then("^the \"([^\"]*)\" added items should match the total price$")
	public void the_added_items_should_match_the_total_price(String No) {
	    womentabs.totalpriceofbasket();
	    womentabs.checkoutbtn();
	}

	
	
}
