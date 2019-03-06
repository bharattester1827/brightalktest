package AutomationTest.BrightTalkTest;

import org.openqa.selenium.By;
import org.testng.Assert;

public class HomePage extends Utils {

		private By _homepageTitle = By.id("header_logo");
		String title = "My Store";
		private By _womenTabs = By.xpath("//div[@id ='block_top_menu']/ul[1]/li[1]/a");
		
		
		public void homePageTitle () {
			System.out.println(driver.getTitle());
			Assert.assertEquals(_homepageTitle, title);
		}		
		public void womenTabs () {
			clickOnElement(_womenTabs);
		}
		
		
		
}

