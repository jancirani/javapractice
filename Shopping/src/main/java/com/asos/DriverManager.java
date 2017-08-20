package com.asos;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

/**
 * Created by peraikumar on 20/10/2016.
 */
public class DriverManager {

    public static WebDriver driver;


    public void openBrowser() throws IOException {


        Properties properties=new Properties();
        FileInputStream fileInputStream=new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\java\\com\\janci\\in\\resource\\config.properties");
        properties.load(fileInputStream);
        driver = new FirefoxDriver();
        String browser=properties.getProperty("browser");
        String url=properties.getProperty("url");

    }
    public void closeBrowser()
    {
        driver.quit();
    }
}


