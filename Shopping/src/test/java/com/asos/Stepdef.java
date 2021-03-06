package com.asos;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import static com.googlecode.totallylazy.time.DateConverter.functions.parse;

/**
 * Created by peraikumar on 20/10/2016.
 */
public class Stepdef {

    Home home = new Home();
    SearchPage sp = new SearchPage();
    Registration reg = new Registration();
    MenPage me = new MenPage();
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

    @Given("^user is on Asos Join/registration page$")
    public void userIsOnAsosJoinRegistrationPage()
    {
        home.join();
    }


    @When("^user enter the \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
    public void userEnterThe(String email, String fname, String lname, String pwd, String dob, String gender) throws InterruptedException {
        reg.register(email, fname, lname, pwd);
    }

    @And("^user clicks join ASOS button$")
    public void userClicksJoinASOSButton()
    {
    }

    //@Then("^user should navigate to home page with logged in state$")
    //public void userShouldNavigateToHomePageWithLoggedInState() throws Throwable {

    //}

    //@When("^user should enter tuser invalid emailaddress \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"$")
   // public void userShouldEnterTuserInvalidEmailaddress(String arg0, String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
      //  throw new PendingException();
    //}



    //@Then("^\"([^\"]*)\"  message is displayed$")
   // public void messageIsDisplayed(String arg0) {
    //}

   // @When("^user enter the invaldpassword \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"$")
    //public void userEnterTheInvaldpassword(String arg0, String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
      //  throw new PendingException();
   // }



   // @Given("^user is in registration page$")
   // public void userIsInRegistrationPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
     //   throw new PendingException();
   // }

   // @When("^user enter existing email address\"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"$")
   // public void userEnterExistingEmailAddress(String arg0, String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
   // }

   // @Then("^user should navigate to already register page$")
   // public void userShouldNavigateToAlreadyRegisterPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
       // throw new PendingException();
   // }

    //@And("^it should display \"([^\"]*)\"$")
   // public void itShouldDisplay(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
      //  throw new PendingException();
   // }


  //  @Then("^it should display an error message \"([^\"]*)\"$")
   // public void itShouldDisplayAnErrorMessage(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
     //   throw new PendingException();
//}
   // @And("^user clicks  join ASOS button$")
   // public void userClicksJoinASOSButton() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
   //     throw new PendingException();
   // }








    @When("^userclicks join ASOS button$")
    public void userclicksJoinASOSButton()
    {
    reg.clickonasosbutton();
    }
    @Given("^user is in registration page$")
    public void userIsInRegistrationPage() throws Throwable {
        reg.regwithoutdata();

    }




    // @Then("^it should display an error message \"([^\"]*)\"$")
   // public void itShouldDisplayAnErrorMessage(String arg0) {
//        Assert.assertEquals(arg0,expec);
   // }
    @When("^user enter the invalid emailaddress \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"$")
    public void user_enter_the_invalid_emailaddress(String email, String fname, String lname, String pwd, String dob, String gender) throws Throwable {
       reg.register(email,fname,lname,pwd);
    }

    @When("^user clicks  join ASOS button$")
    public void user_clicks_join_ASOS_button() throws Throwable {
      reg.clickonasosbutton();
    }

    @Then("^\"([^\"]*)\"  message is displayed$")
    public void messageIsDisplayed(String expected)
    {
        String actual=reg.emailverification();
        Assert.assertEquals(expected,actual);
    }

    @When("^user enter the invaldpassword \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"$")
    public void user_enter_the_invaldpassword(String email, String fname, String lname, String pwd, String dob, String gender) throws Throwable {
       reg.register(email,fname,lname,pwd);
    }

    @Then("^\"([^\"]*)\" password error message is displayed$")
    public void password_error_message_is_displayed(String expected) throws Throwable {
    String actual = reg.passwordVerification();
    Assert.assertEquals(expected, actual);
    }

    @Given("^user is in the homepage$")
    public void userIsInTheHomepage() throws Throwable
    {
        home.verifyHomePage();
    }

    @When("^user click the men link$")
    public void userClickTheMenLink() throws Throwable {
        me.clickpage();
    }

    @And("^user click on view all buttons$")
    public void userClickOnViewAllButtons() throws Throwable {
    me.search();
    }

    @Then("^user successfully view the all products$")
    public void userSuccessfullyViewTheAllProducts() throws Throwable {
        Assert.assertTrue(me.mensAllProductsPage());
    }
}