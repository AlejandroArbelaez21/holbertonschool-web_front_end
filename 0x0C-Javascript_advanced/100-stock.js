let stock = {
    macbook: 2,
    iphone: 4
  }
  
  const processPayment = (itemName) => {
    console.log(`No more ${itemName} in stock`);
    console.log('Payment is not being processed');
  }
  
  const processError = (itemName) => {
    console.log(`No more ${itemName} in stock`);
    console.log('Payment is not being processed');
  }
  
  const processOrder = (itemName, callbackPayment, callbackError) => {
    console.log(`Verifying the stock of ${itemName}`);
    if(itemName > 0) {
      callbackPayment(itemName);
    } else {
      callbackError(itemName);
    }
  }
  
  let item = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');
  processOrder(item, processPayment, processError);
  