package AutomationTest.BrightTalkTest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

import junit.framework.Assert;

public class WomenTabs extends Utils {

	private By _priceto = By.xpath("//div[@class='layered_price']/ul/div/div/a[2]");
	private By _additem = By.xpath("//*[@id='center_column']/ul/li[2]");
	private By _subitems = By.xpath("//*[@id='center_column']/ul/li[2]/div/div[2]/div[2]/a[1]");
	private By _layercart = By.xpath("//*[@id='layer_cart']/div[1]/div[1]/span");
	private By _viewshoppingcart = By.xpath("//*[@title='View my shopping cart']");
	private By _totalprice = By.id("total_price_without_tax");
	private By _checkoutbtn = By.xpath("//*[@class='button btn btn-default standard-checkout button-medium']");
	
	
	
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
	public void displayedItembetweenpricerange (int pricefrom, int priceto) {
		
	}
	public void addItem (String No) {
		JavaScriptForScrollUp(_additem);
		WebElement item = driver.findElement(_additem);
		Actions act = new Actions(driver);
		act.moveToElement(item);
		WebElement subitem = driver.findElement(_subitems);
		String elementXpath = loadprop.getproperty(No);
		act.moveToElement(subitem);
		driver.findElement(By.xpath(elementXpath)).click();
		//act.click().build().perform();		
	}
	public void layercartclose () {
		clickOnElement(_layercart);
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
