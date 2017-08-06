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


    public void openBrowser() throws IOException
    {
        Properties prop=new Properties();
        FileInputStream fp=new FileInputStream("C:\\Users\\sasikumar\\IdeaProjects\\Shopping\\src\\test\\java\\com\\asos\\Resources\\config.properties");
        prop.load(fp);
        String URL=prop.getProperty("url");
        String BROWSER=prop.getProperty("browser");
        System.out.println(URL);
        if(BROWSER.equalsIgnoreCase("firefox"))
        {
            driver= new FirefoxDriver();
        }
        else if(BROWSER.equalsIgnoreCase("chrome"))
        {
            System.setProperty("webdriver.chrome.driver", "c://chromedriver.exe");
            driver=new ChromeDriver();
        }
        driver.get(URL);
//        driver.manage().window().maximize();
//        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
//        Alert alert= driver.switchTo().alert();
//        String msg=alert.getText();
//        System.out.println(msg);
//        alert.accept();


    }


    public void closeBrowser()
    {
    driver.close();
    }
}
