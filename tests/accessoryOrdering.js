/*Test to check if given accessory added to the cart */
module.exports = {

    before : function(client) {
        var telus = client.page.telus();
        telus.navigate() //Launch telus site
       .assert.titleContains('TELUS');
       client.maximizeWindow();
      },

      'Click Accessory': function (browser) { 

        var accessory = browser.page.accessory();
        var acc=browser.globals.accessory;
        browser.useXpath()       
        accessory.assert.visible('@accessoryIcon')  
        .click('@accessoryIcon');//Select accessory on the main page
        browser.url(acc.headphoneURL)    //Go to headphone accessory
        accessory.selectAccessory(acc.name) //select specifgic headphone based on config
        
     },
     
     'Verify Cart': function (browser) { 

        var accessory = browser.page.accessory();
        var cart = browser.page.checkout();
        var accName=browser.globals.accessory.name;
         accessory.clickCart(accName) //Verify headphone name and add to cart

         console.log("Updating state");
         var telus = browser.page.telus(); 
         var state=browser.globals.state;
         telus.selectStateOnCart(state.stateName);  //Change state for the site        
          /*****See if select state trigger alert message on cart for pricing change ***/
         browser.assert.visible(state.alertCart,'Changing region may affect your current offers and prices is visible')
        
     }
    
    }