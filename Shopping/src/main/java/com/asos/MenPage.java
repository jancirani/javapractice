package com.asos;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

/**
 * Created by peraikumar on 26/08/2017.
 */
public class MenPage extends DriverManager
{
    DriverManager DM = new DriverManager();
    public void clickpage()
    {
        driver.findElement(By.xpath("//*[@id='BodyTag']/div[4]/div/header/div[5]/nav/ul/li[3]/a/span")).click();
    }
    public void search()
    {
        driver.findElement(By.cssSelector(".salesBanner__cta.js-buttonHover>span")).click();
    }

    public boolean mensAllProductsPage() {
        return driver.findElement(By.xpath("//*[@id='BodyTag']/div[4]/div/section/section[2]/article[1]/div[2]/div/h3")).isDisplayed();
    }


}
