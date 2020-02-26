  var accessory={
  
    selectAccessory: function(accName){
    //Select headphone Accessory
        
         this
        .assert.visible("//*[contains(text(),accName)]",'Selected Accessory is visible' )            
        .click('@selectedHeadphones') 
        .useCss()
        .click('button[id=addToCartBtn]')
        .pause(5000)
       
    },
    clickCart: function(accName){
        //Verify details from shopping cart
        this.useXpath()              
       .click('/html/body/main/div/div[2]/div[2]/div/div/div/div/div[1]/div[2]/a/div') //View cart icon
       .assert.visible("//*[contains(text(),accName)]",'Accessory added to cart' )            
       .pause(2000)

   }
  };
  module.exports = {
 
      url: 'https://telus.com',
      commands: [accessory],
      elements: {
       accessoryIcon: {
          selector: '//*[@id="app"]/div/div/section[3]/div/div[2]/div[4]/div/a/div/picture/img',
          locateStrategy: 'xpath'
        },
        headphones:{
            selector: '//*[@id="categories"]/div/div/a[1]/span/div',
            locateStrategy: 'xpath'
        },
        selectedHeadphones:{
            selector: '/html/body/main/div/div[2]/div[2]/div/div/section/div/div[3]/div/div/div[2]/div/div[1]/div/div[3]/a/p',
            locateStrategy: 'xpath'
        }
      }
    };
  