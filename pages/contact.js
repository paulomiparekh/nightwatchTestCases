
  var contact={
  
    billingAndShipping: function(){

        this.useCss()
        .verify.visible('#error-edit-customer-profile-billing-commerce-customer-address-und-0-first-name','Empty first check valided')    
        .pause(3000)   

    }

  };
  module.exports = {
      commands: [contact],
    };
  