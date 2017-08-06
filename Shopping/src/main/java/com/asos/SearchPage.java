package com.asos;

import org.openqa.selenium.By;

/**
 * Created by peraikumar on 20/10/2016.
 */
public class SearchPage extends DriverManager {

    public String searchResult()
    {

        return driver.findElement(By.cssSelector(".search-term")).getText().toLowerCase();
    }
}
