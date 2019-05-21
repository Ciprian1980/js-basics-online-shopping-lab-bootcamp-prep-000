var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var object = {itemName: item, itemPrice: price};
  cart.push(object);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var cartDescription = 'In your cart, you have';
  if (cart.length === 0){
    return (`Your shopping cart is empty.`);
  }
  else if(getCart().length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  
    if(cart.length === 2){
      return`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`+ ', ' +`and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    }
    else if(cart.length >=3){
      var items = '';
      var lastItem = cart[-1];
      for (let i = 0; i < cart.length-1; i++){
      items += `${cart[i].itemName} at $${cart[i].itemPrice}`;
     }
      cartDescription += `${items}, and ${lastItem.itemName} at $${lastItem.itemPrice}.` ; 
   }
 }



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
