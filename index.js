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
  var price;
   if (cart.length == 0);{
     return (`Your shopping cart is empty`);
    for (let i = 0; i < cart.length; i++);{
       if(cart.length-1 == i){
       return `In your cart, you have ${i} at `
       }
  
       else(`Your shopping cart is empty`);
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
