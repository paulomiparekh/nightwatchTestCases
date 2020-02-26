
var phoneScroll = {

  scroll: function(mobileImg,msg) {
    
    this.useXpath()
    .pause(2000) //adding for testing
    .assert.visible(mobileImg,'Image is visible')
    //.waitForElementVisible(mobileImg,1000)
    .moveToElement(mobileImg,200,200)
    .pause(2000)
    .click(mobileImg)      
  }
};

var capacityVisible={

  selectCapacityAndColour: function(iphone){
     
    this.useCss()
    .waitForElementVisible('#storagesize_64',3000)
    .assert.elementPresent('#storagesize_64','Capacity is available')
    .assert.visible('button[title=Green]','Green Color is visible')
    .click('button[title=Green]')
    .useXpath()
    .click(iphone.buynow)
    .pause(10000)
  }

};

var stateSelection={

  selectState: function(state){
    this.useCss()
    .click('#header-container > div.sc-bbmXgH.fKBsQX > div > div > div > div:nth-child(3) > a')
    .useXpath().click("//*[contains(text(),'Alberta')]")
    .verify.containsText('//*[@id="header-container"]/div[1]/div/div/div/div[2]/a','AB','StateName matches with selection')
    .pause(1000)
  },
  
  selectStateOnCart: function(state){
    this.useXpath()
    .click('//*[@id="header-container"]/div[1]/div/div/div/div[2]/a')
    .pause(1000)
    .useXpath().click("//*[contains(text(),'Alberta')]")    
    .verify.containsText('//*[@id="header-container"]/div[1]/div/div/div/div[2]/a','AB','StateName matches with selection')
    .pause(6000)
  }
};




module.exports = {
    url: 'https://telus.com',
    commands: [phoneScroll,capacityVisible,stateSelection],

  };
