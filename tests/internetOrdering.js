module.exports = {

    before : function(client) {
        var telus = client.page.telus();
        telus.navigate()  //Launch Telus
       .assert.titleContains('TELUS');
       client.maximizeWindow();
      },

    'State selection': function (browser) { 

        var telus = browser.page.telus(); //Internet available in some specific states 
        var state=browser.globals.state.stateName;
       telus.selectState(state);  // update state based on config where internet is available
       
    },

    'Internet selection': function (browser) { 

        var internetSelection = browser.page.plan();
        var internet=browser.globals.internet;
        internetSelection.verifyAndSelectInternet(internet); //Select internet from  main page
         browser.setValue('//*[@id="autocomplete-form-address-google"]',[internet.address,browser.Keys.ENTER]) //Enter service address for the internet
        .useXpath().click("//*[contains(text(),'Check address')]")
        .pause(3000)
    },

    'Add Internet Plan': function (browser) { 

        var internetPlan = browser.page.plan(); 
        var internet=browser.globals.internet;
        internetPlan.SelectInternetPlan(internet); //Select and verify available plans for  the internet
       
    },

    'Checkout Internet': function(browser){
        var cart = browser.page.checkout();
        cart.verifyInternetCheckOut();  //Verify shopping cart based on previous selection including promotions and one time credit and perform checkout
    },

    'Customer Info': function(browser){

        var custInfo = browser.globals.customerDetails;
        browser.setValue('//*[@id="firstname"]',['Alex',browser.Keys.ENTER]) //Enter customer details
        .setValue('//*[@id="lastname"]',['Peter',browser.Keys.ENTER])
        .setValue('//*[@id="phonenumber"]',['4',browser.Keys.ENTER])
        .assert.elementPresent('//*[@id="phonenumber_error-message"]/p','Error message visible in case of invalid phone number') //Verify invalid phone number
        .pause(1000)
        .setValue('//*[@id="phonenumber"]', '\u0008')
        .pause(1000)
        .setValue('//*[@id="phonenumber"]',['4168746345',browser.Keys.ENTER])
        .click(custInfo.continue)
        .assert.elementPresent('//*[@id="email_error-message"]/p','Mandatory Field error message is visible')  //Verify if email verification is there
        .pause(1000)
        .setValue('//*[@id="email"]',['abcd@abcd.com',browser.Keys.ENTER])
        .click(custInfo.continue)
        
        .pause(2000);

    },

    'Billing Info': function(browser){
        var custInfo = browser.globals.customerDetails;
        browser.verify.attributeEquals('//*[@id="method_system"]', 'checked', 'true','radio button is checked') 
        .click(custInfo.billingContinue)
        .pause(2000)
        .click('//*[@id="dob-month"]')
        .click('//*[@id="dob-month"]/option[12]')
        .setValue('//*[@id="dob-day"]',['17',browser.Keys.ENTER])
        .setValue('//*[@id="dob-year"]',['1987',browser.Keys.ENTER])
        .pause(2000)
        .assert.visible('//*[@id="identificationtype"]','Choose Identification type drop down box is visible') //Verify different ID types
        .click('//*[@id="identificationtype"]')
        .click('//*[@id="identificationtype"]/option[2]')
        .assert.elementPresent('//*[@id="creditDetails"]/div[2]/form/div[5]/div/div[1]/div/label/span/span','Social Insurance Number Field is visible')
        .pause(2000)
        .setValue('//*[@id="socialinsurancenumber"]',['1',browser.Keys.ENTER])
        .assert.elementPresent('//*[@id="socialinsurancenumber_error-message"]/p','Error message visible in case of invalid social insurance number') //Verify for SIN
        .pause(3000)        
    },


    }