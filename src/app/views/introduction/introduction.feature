Feature: Choose prosecuting authority
    As a citizen user of make a plea
    I should be able to choose the prosecting authority that sent me the notice
    In order to progress to the next correct service
    @CucumberScenario
    Scenario: Choose The police
        Given I using the Choose prosecuting authority multiple choice
        When I choose "The Police" radio button 
        And I click the Start Now button
        Then I should be redicted to https://www.makeaplea.service.gov.uk/plea/enter_urn/
    @CucumberScenario
    Scenario: Choose Transport for London
        Given I using the Choose prosecuting authority multiple choice
        When I choose "Transport for London" radio button 
        And I click the Start Now button
        Then I should be redicted to "/Your-details"