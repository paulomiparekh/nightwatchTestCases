var main = {
    
    mobileImg:'//*[@id="app"]/div/div/section[4]/div/div[2]/div[1]/div/a/div/picture/img', //Phone image
    InternetImg:'//*[@id="app"]/div/div/section[4]/div/div[2]/div[2]/div' //internet image

};

var iphone11={
  cap1:'//*[@id="storagesize_64"]/span',
  cap2:'//*[@id="storagesize_128"]/span',
  cap3:'//*[@id="storagesize_128"]/span',
  colorgreen:'//*[@id="box2"]/div[3]/div/button[2]',
  buynow:'//*[@id="navFlexgrid"]/div[2]/a',
  sku:'NLAIP1164GR',
  name:'Iphone 11',
  iphoneImg:'//*[@id="iphone-11_img"]/picture/img' //iphone 11 image
};

var cart={
  size:'64',
  colour:'Green',
  plan:'Peace of Mind',
  price:'75'
};

var state={
  stateName:'#header-container > div.sc-bbmXgH.fKBsQX > div > div > div > div:nth-child(3) > a',
  alertCart:'//*[@id="root"]/div/div/div/div/div/div/div[1]/div/div[2]/div/div[1]/div/div/div/div/div/div/div/div/div/p/span/span[1]'
};

var internet={
  
  internet1:'//*[@id="header-container"]/div[2]/div/div/div[1]/ul/li[2]/div/div/div/div/div[2]/div[1]/ul/li[1]/a',
  address:'1250 McKinnon Dr NE, Calgary, AB',
  internet25:'//*[@id="app-mount"]/main/section/div[4]/div/div/div[2]/div/div/div/div[1]/div[1]/div/div/div/div/div[1]/div[1]/div/span'
};
var accessory={
  headphoneURL:'https://www.telus.com/en/on/mobility/accessories/category/headphones-and-speakers?linktype=accessories_nav',
  names:'JBL TUNE 500BT'
}; 

var customerDetails={
  continue:'//*[@id="contactDetails"]/div[2]/form/div/div[5]/button',
  billingContinue:'//*[@id="billingDetails"]/div[2]/div[3]/button',


}
  
  module.exports = {
    main: main,
    iphone11: iphone11,
    cart:cart,
    state:state,
    internet:internet,
    accessory:accessory,
    customerDetails:customerDetails
  }