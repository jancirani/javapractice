package com.asos;


import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

/**
 * Created by peraikumar on 20/10/2016.
 */
public class Hooks {

    DriverManager DM= new DriverManager();

   @Before
    public void setUP() throws IOException
    {
        DM.openBrowser();
    }
   @After
    public void tearDown()
   {
    DM.closeBrowser();
   }
}
