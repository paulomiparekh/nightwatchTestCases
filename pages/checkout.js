  var checkout={
  
    verifyDoCheckout: function(checkout){
      //Verify wireless item has been added to the cart with checkout link option
        this.useXpath()
        .waitForElementVisible('@checkoutLink',3000)
        .assert.elementPresent('@checkoutLink','Checkout link is present')
        .click('@checkoutLink')
        .pause(5000)

    },
    verifyCheckoutData: function(checkout){
//Verify cart data based on selection made for the device and plan
      this.useXpath()
      .assert.elementPresent('@deviceCapacity','Device capacity')
      .assert.containsText('@deviceCapacity',checkout.size,'Capacity macthes with selection')
      .assert.elementPresent('@deviceColour','Device colour')
      .assert.containsText('@deviceColour',checkout.colour,'Device colour matches with selection')
      .assert.elementPresent('@planSelection','Plan')
      .assert.containsText('@planSelection',checkout.plan,'Device plan matches with selection')
      .useXpath().click("//*[contains(text(),'Check out')]")
      this.pause(4000)
      

  },
//Verify internet checkout details based on selection
    verifyInternetCheckOut: function(checkout){
    this.useXpath()
    .assert.elementPresent('@selectedInternetPlan')
    .assert.containsText('@selectedInternetPlan','Internet 25','Internet 25 plan is present in cart')
    .assert.elementPresent('@promotion')
    .verify.containsText('@promotion','Promotional:','Promotion is present in cart')
    .assert.elementPresent('@oneTimeCredit')
    .verify.containsText('@oneTimeCredit','HS - One-Time Web Credit - $150','One time web credit is added in cart')
    .useXpath().click("//*[contains(text(),'Check out')]")
    .pause(4000)
  }
};
  module.exports = {
      commands: [checkout],
      elements: {
        checkoutLink: {
           selector: '//*[@id="app"]/div[2]/div/div/div/div/div/div/div/div/div/div/div/div[2]/p/p/a',
           locateStrategy: 'xpath'
         },
         deviceCapacity:{
             selector: '//*[@id="cart-relative-box"]/div/div/div/div/div/div/span/div/div/div/div[2]/div/div/div[1]/div[2]/div[2]/div/ul/li[1]/span',
             locateStrategy: 'xpath'
         },
         deviceColour:{
             selector: '//*[@id="cart-relative-box"]/div/div/div/div/div/div/span/div/div/div/div[2]/div/div/div[1]/div[2]/div[2]/div/ul/li[2]/span',
             locateStrategy: 'xpath'
         },
         planSelection:{
            selector: '//*[@id="cart-relative-box"]/div/div/div/div/div/div/span/div/div/div/div[2]/div/div/div[10]/div/div/div/div/div[1]/div/p',
            locateStrategy: 'xpath'
         },
         planPrice:{
          selector: '/html/body/div[1]/div/div/div/div/div/div/div[1]/div/div[2]/div/div/div/div/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/span/div/div/div/div[2]/div/div/div[10]/div/div/div/div/div[2]/span',
          locateStrategy: 'xpath'
        },
        selectedInternetPlan:{
          selector: '//*[@id="app"]/div/div[3]/div[3]/div/div/div/div/div[1]/div/div[2]/div[1]/div/div/div/div/div/div/div[2]/div[1]/div[1]/div/h4/a',
          locateStrategy: 'xpath'
        },
        promotion:{
          selector: '//*[@id="app"]/div/div[3]/div[3]/div/div/div/div/div[1]/div/div[2]/div[1]/div/div/div/div/div/div/div[2]/div[1]/div[1]/div/div/div/div/div/div/div/p[2]/strong',
          locateStrategy: 'xpath'
        },
        oneTimeCredit:{
          selector: '//*[@id="app"]/div/div[3]/div[3]/div/div/div/div/div[2]/div/div/div/div[2]/div[2]/div/div/div[1]/p/strong',
          locateStrategy: 'xpath'
        }

       }
    };
  