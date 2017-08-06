package com.asos;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * Created by peraikumar on 20/10/2016.
 */
public class Stepdef {

    Home home=new Home();
    SearchPage sp= new SearchPage();

    @Given("^I am in home page$")
    public void i_am_in_home_page()
    {
        String actual = home.verifyHomePage();
        System.out.println("The textis " + actual);
        Assert.assertEquals(actual, "THIS IS ASOS");
    }

    @When("^I search a product$")
    public void i_search_a_product()  {
        home.search();
    }

    @Then("^I can view that respective product$")
    public void i_can_view_that_respective_product() {

        String expected=sp.searchResult();
        Assert.assertEquals("nike",expected);
    }

    @When("^I search a \"([^\"]*)\"$")
    public void i_search_a(String product)  {
home.multiple(product);
    }

    @Then("^can view that \"([^\"]*)\" successfully$")
    public void can_view_that_successfully(String product)
    {
        String expected=sp.searchResult();
        Assert.assertEquals(product,expected);
       // Assert.assertTrue(WebDriver.isTextPresent("nike"));
    }

}
