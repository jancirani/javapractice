package com.asos;

import org.openqa.selenium.By;

/**
 * Created by peraikumar on 20/08/2017.
 */
public class Registration extends DriverManager {
    DriverManager dm = new DriverManager();

    public void register(String email, String fname, String lname, String pwd) throws InterruptedException {
        driver.findElement(By.id("Email")).sendKeys(email);
        driver.findElement(By.id("FirstName")).sendKeys(fname);
        driver.findElement(By.id("LastName")).sendKeys(lname);
        driver.findElement(By.id("Password")).sendKeys(pwd);
        driver.findElement(By.id("BirthDay")).sendKeys("17");
        driver.findElement(By.id("BirthMonth")).sendKeys("04");
        driver.findElement(By.id("BirthYear")).sendKeys("1984");
        driver.findElement(By.cssSelector(".tickbox-container.subfield.last-subfield.qa-gender-male")).click();
        driver.findElement(By.cssSelector(".checkbox.qa-marketing-label")).click();
       // driver.findElement(By.xpath(".//*[@id='main']/div[1]/div[2]/form/fieldset/div[7]/div[2]/label/span/text()")).click();
        Thread.sleep(1000);
        driver.findElement(By.id("register")).click();
        Thread.sleep(1000);
    }
}
