package com.asos;

import org.openqa.selenium.By;

/**
 * Created by peraikumar on 20/10/2016.
 */
public class Home extends DriverManager {

    public void search()
    {
        driver.findElement(By.id("txtSearch")).sendKeys("nike");
        driver.findElement(By.cssSelector(".go>span")).click();
    }


    public void multiple(String product)
    {
        driver.findElement(By.id("txtSearch")).sendKeys(product);
        driver.findElement(By.cssSelector(".go>span")).click();
    }

    public String verifyHomePage() {
        String actualText = driver.findElement(By.xpath(".//*[@id='BodyTag']/div[4]/div/section/section/div/div/article[1]/div[1]/h2/span")).getText();
        return actualText;
    }
    public void join()
    {
        driver.findElement(By.linkText("Join")).click();

    }
}
