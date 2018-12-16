var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101);
  var object = {itemName: item, itemPrice: price};
  cart.push(object);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var itemPrice;
  if (cart.length === 0){
    return (`Your shopping cart is empty.`);
  }
  else if(getCart().length === 1){
    return `In your cart, you have ${cart[0]} at ${itemPrice}.`
  }
  
  for (let i = 0; i < cart.length; i++){
    if(cart.length === 2){
      return`In your cart, you have ${cart.length()['']} at ${cart.itemPrice()['']}, and ${cart.length()['']} at ${cart.itemPrice()}.`;
    }
    else if(cart.length >=3){
      return`In your cart, you have ${cart.length()} at ${cart.itemPrice()}, and ${cart.length()} at ${cart.itemPrice()}, and ${cart.length()} at ${cart.itemPrice()}}.`;
    }
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
