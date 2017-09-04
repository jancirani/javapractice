package com.asos;

import io.github.bonigarcia.wdm.ChromeDriverManager;
import io.github.bonigarcia.wdm.DriverVersion;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static com.asos.DriverManager.driver;

/**
 * Created by peraikumar on 04/09/2017.
 */
public class BetWay {

    WebDriver driver;

    @Before
    public void OpenBrowser() {
        ChromeDriverManager.getInstance().setup();
        driver= new ChromeDriver();
        driver.get("https://sports.betway.com/en/sports");
        driver.manage().window().maximize();
    }

   // @Test
    public void TermsCondition() throws Exception {

        driver.findElement(By.linkText("Terms & Conditions")).click();
        Thread.sleep(5000);
        String actualText= driver.findElement(By.cssSelector("html > body > span > div > div > div > div > div > h1")).getText();
        String expectedText = "Betway – The Gaming Contract (Terms and Conditions)";

        Assert.assertEquals(actualText,expectedText);
    }

    @Test
    public void checkLiveStatus() throws Exception {
        driver.findElement(By.cssSelector(".channelNavigation.contentSelectorItemButton")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("//html/body/div[1]/div/div[1]/div/div[1]/div/div[1]/div[2]/div/div[2]/div/div/div[1]/div/span")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("//html/body/div[1]/div/div[1]/div/div[1]/div/div[2]/div[4]/div/div[2]/div/div[2]/div/div[3]/div[1]/div/div[1]/div[2]/div/div[1]/article/div/div[1]/h1eader/div/div/div")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("html/body/div[1]/div/div[1]/div/div[1]/div/div[2]/div[4]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div[4]/div/div[1]/div[1]/div[2]/div")).click();
        driver.findElement(By.cssSelector(".stakeInput")).sendKeys("4");
    }


    @After
    public void closeBrowser() {
        driver.quit();
    }
}
