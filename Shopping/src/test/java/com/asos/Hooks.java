package com.asos;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.ChromeDriverManager;
import io.github.bonigarcia.wdm.FirefoxDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.IOException;

import static com.asos.DriverManager.driver;

/**
 * Created by peraikumar on 20/10/2016.
 */
public class Hooks {

    DriverManager DM= new DriverManager();

   @Before
    public void setUP() throws IOException
    {
       ChromeDriverManager.getInstance().setup();
        driver= new ChromeDriver();
        driver.get("http://www.asos.com/");
    }
   @After
    public void tearDown()
   {
    DM.closeBrowser();
   }
}
