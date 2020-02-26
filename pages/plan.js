
  
  var planVerify={ //Method to select and verify offers and plan for wireless
  
    verifyAndSelectPlan: function(offers){
       
      this.useCss()
      .moveToElement('#Green_1',200,200)
      .useXpath()
      .pause(2000)
      .waitForElementVisible('@offer1',3000)     
      .moveToElement('@offer1',200,200)
       .assert.containsText('@offer1', 'Pay $0','Pay $0 offer is visible')
       .pause(2000)
      .click('@offerRadio1')
      .pause(5000)
      .click('@plan1')
      .click('@tncCheckbox')
      .useCss()
      .assert.visible('button[name=Add-to-cart-button]','Add to cart button is visible')
      .click('button[name=Add-to-cart-button]')
      .pause(5000)
    }
  
  };

  var internetSelection={ 
//Method to select internet option
    verifyAndSelectInternet: function(internet){
    this.useXpath()
    .assert.containsText('@internetMenu','Internet','Internet menu is visible')
    .click('@internetMenu')
    .pause(2000)
    .click('@internetPlan')
    .assert.visible('@getStarted','Get Started button is visible')
    .click('@getStarted')
    .pause(3000)
    }
    };

    var internetPlan={
//Method to verify and select internet plans
      SelectInternetPlan: function(internet){
      this.useXpath()
      .verify.containsText(internet.internet25,'Internet 25','Internet 25 plan is visible')
      .click('@addToCart')
      .pause(2000)
      .useXpath().click("//*[contains(text(),'Review cart')]")
      .pause(4000)
  
      }

  };
  module.exports = {
   
      commands: [planVerify,internetSelection,internetPlan],
      elements: {
        plan1: {
           selector: '//*[@id="PSYSTB115"]',
           locateStrategy: 'xpath'
         },
         planText:{
             selector: '//*[@id="page-container-box"]/div/div/div[4]/div/div[2]/div/div/div[2]/div[2]/div/div[1]/div/div[2]/label/span/div/p/span',
             locateStrategy: 'xpath'
         },
         tncCheckbox:{
             selector: '//*[@id="page-container-box"]/div/div/div[6]/div/div/div/div/div[2]/div/div/div[2]/div/div/div/label/div/span',
             locateStrategy: 'xpath'
         },
         offer1:{
            selector: '//*[@id="page-container-box"]/div/div/div[3]/div/div/div/div/div[2]/div[2]/label/span/div/h3',
            locateStrategy: 'xpath'
         },
         offerRadio1:{
          selector: '//*[@id="1091020_bib"]',
          locateStrategy: 'xpath'
        },
        internetMenu:{
          selector: '//*[@id="main-nav-list-item-1"]',
          locateStrategy: 'xpath'
        },
        internetPlan:{
          selector: '//*[@id="header-container"]/div[2]/div/div/div[1]/ul/li[2]/div/div/div/div/div[2]/div[1]/ul/li[2]/a',
          locateStrategy: 'xpath'
        },
        getStarted:{
          selector: '//*[@id="app"]/div/section[1]/div[2]/div/div/div/div/div/div[2]/a',
          locateStrategy: 'xpath'
        },
        addToCart:{
          selector: '//*[@id="pdp-cta"]/div/button',
          locateStrategy: 'xpath'
        }

       }
    };
  