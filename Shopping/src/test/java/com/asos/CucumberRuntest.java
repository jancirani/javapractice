package com.asos;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(features = ".", dryRun = false, tags="@reg",format={"json:target/cucumber.json", "html:target/cucumber"})

public class CucumberRuntest {
}
