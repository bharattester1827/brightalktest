package AutomationTest.BrightTalkTest;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

import junit.framework.Assert;

public class WomenTabs extends Utils {

	private By _priceto = By.xpath("//div[@class='layered_price']/ul/div/div/a[2]");
	private By _additem = By.xpath("//div[@id='center_column']/ul[1]/li[2]/div/div[2]");
	private By _subitems = By.xpath("//div[@id='center_column']/ul[1]/li[2]/div/div[2]/div[2]/a[1]/span[1]");
	private By _obscures = By.xpath("//div[@class='fancybox-overlay fancybox-overlay-fixed']");
	private By _layercarthover = By.xpath("//div[@id='layer_cart']");
	private By _layercart = By.xpath("//div[@class='layer_cart_cart col-xs-12 col-md-6']/div[4]/a[1]");
	private By _viewshoppingcart = By.xpath("//*[@title='View my shopping cart']");
	private By _totalprice = By.id("total_price_without_tax");
	private By _checkoutbtn = By.xpath("//*[@class='button btn btn-default standard-checkout button-medium']");
	private By _pricerange = By.xpath("//div[@class='layered_price']/ul/span");
	private By _itemlistedquantity1 = By.xpath("//div[@id='center_column']/ul[1]/li[1]");
	private By _itemlistedquantity2 = By.xpath("//div[@id='center_column']/ul[1]/li[2]");
	private By _itemlistedquantity3 = By.xpath("//div[@id='center_column']/ul[1]/li[3]");
	private By _itemlistedquantity4 = By.xpath("//div[@id='center_column']/ul[1]/li[4]");
	private By _itemlistedquantity5 = By.xpath("//div[@id='center_column']/ul[1]/li[5]");
	
	
	
	
	public void selectSize(String size) {
		//waitForElementToBeVisible(_sizeL, 10);
		String elementXpath = loadprop.getproperty(size);
		driver.findElement(By.xpath(elementXpath)).click();
	}
	public void priceSliderFromAndTo(String pricefrom, String priceto) {
		WebElement slider = driver.findElement(_priceto);
		System.out.println(_priceto.getClass());
		JavaScriptForScrolldown(_priceto);
    	Actions act = new Actions(driver);
    	Action move = (Action) act.dragAndDropBy(slider, -150, 0).build();
    	move.perform();
	}
	public void displayedItembetweenpricerange (String pricefrom, String priceto) {
		System.out.println(getTextFromElement(_pricerange));
		System.out.println(getTextFromElement(_itemlistedquantity1));
		System.out.println(getTextFromElement(_itemlistedquantity2));
		System.out.println(getTextFromElement(_itemlistedquantity3));
		System.out.println(getTextFromElement(_itemlistedquantity4));
		System.out.println(getTextFromElement(_itemlistedquantity5));
	}
	public void addItem (String No) {
		WebElement element = driver.findElement(_additem);
		Actions action = new Actions(driver);
		action.moveToElement(element).perform();
		clickOnElement(_subitems);		
	}
	public void layercartclose () {
		//driver.switchTo().activeElement().findElement(_layercarthover);
		scrolltoviewelement(_layercarthover);
		WebElement element = driver.findElement(_layercarthover);
		JavaScriptForScrollUp(_layercarthover);
		Actions action = new Actions(driver);
		Action act = (Action) action.moveToElement(element).build();
		act.perform();
		javascriptexecutor(_layercart);
	}
	public void viewshoppingcart () {
		clickOnElement(_viewshoppingcart);
	}
	public void checkoutbtn () {
		clickOnElement(_checkoutbtn);
	}
	public void totalpriceofbasket () {
		WebElement element = driver.findElement(_totalprice);
		Assert.assertEquals("$29.00", element);
	}
	
	
}
