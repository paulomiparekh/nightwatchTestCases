module.exports = {

    before : function(client) {
        var telus = client.page.telus();
        telus.navigate() //Launch Telus site
       .assert.titleContains('TELUS')      
        client.maximizeWindow();
        client.click('#header-container > div.sc-bbmXgH.fKBsQX > div > div > div > div:nth-child(3) > a')
        .pause(2000)
        .useXpath().click("//*[contains(text(),'Ontario')]") //State selection to ON
      
      },

    'Phone selection': function (browser) { 

        var telus = browser.page.telus();
        var mobileImg=browser.globals.main.mobileImg;
        telus.scroll(mobileImg,'Phone image'); //Select phone image on main page
        var iphone11=browser.globals.iphone11.iphoneImg;
        telus.scroll(iphone11,'Iphone 11 image'); //Select iphone 11
    },

    'Device config': function (browser) { 

      var telus = browser.page.telus();
      var iphone=browser.globals.iphone11;
      telus.selectCapacityAndColour(iphone);   //Select iphone colour and capacity with assertions
    
   },

   'Add Plan': function (browser) { 

    var device = browser.page.plan();
    var iphone=browser.globals.iphone11;
    browser.verify.urlContains(iphone.sku,iphone.name+'Page loaded')
    device.verifyAndSelectPlan();   //Add offers and plan 
  
 },
 'Checkout': function (browser) { 

  var cart = browser.page.checkout();
  var checkoutParams=browser.globals.cart;
  cart.verifyDoCheckout(checkoutParams);  //Checkout after adding plan

},
//  .click('#region_form select option[value="all"]')

'Verify and Cartcheckout': function (browser) { 

  var cart = browser.page.checkout();
  var checkoutParams=browser.globals.cart;
  cart.verifyCheckoutData(checkoutParams);  //Verify shopping cart based on selection
  browser.pause(8000)
}

}