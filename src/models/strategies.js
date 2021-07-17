const { stock } = require('./attributes/main');
const { shop } = require('./manager');
const Cart  = require('./cart');
const Strategy = require('./strategy');



// function buyOneTShirt(index, stock) {
//   shoppingCart = stock[+index]
//   // console.log(`TShirt: #${stock[index].id} , color: ${stock[index].size} , payed: [ ${stock[index].basePrice}$ ]`);
//   return stock[index].basePrice;
// }

const cart = new Cart([])

function buyOneTShirt(index, stock, cart) {
  shoppingCart = stock[+index]
  // console.log(`TShirt: #${stock[index].id} , color: ${stock[index].size} , payed: [ ${stock[index].basePrice}$ ]`);
  // return cart.push(stock[index].basePrice);
  return stock[index].basePrice;
}


shop.add(
  new Strategy(
    ++shop._length, 
    'CASH', 
    cart,
    () => {
    order = parseFloat(cart * 1.2).toFixed(2)
    console.log(`Bought with ' CASH ' ,  [ Base Cost: '${cart}$' ] ,  [ Total Cost: ${order}$ ]`);
    return order;
  })
);

shop.add(
  new Strategy(
    ++shop._length, 
    'BANK', 
    cart,
    () => {
    order = parseFloat(cart * 1.4).toFixed(2)
    console.log(`Bought with ' BANK ' ,  [ Base Cost: '${cart}$' ] ,  [ Total Cost: ${order}$ ]`);
    return order;
  })
);

shop.add(
  new Strategy(
    ++shop._length, 
    'CREDIT', 
    cart,
    () => {
    order = parseFloat(cart * 1.6).toFixed(2)
    console.log(`Bought with ' CREDIT CARD ' ,  [ Base Cost: '${cart}$' ] ,  [ Total Cost: ${order}$ ]`);
    return order;
  })
);



module.exports = { 

  buyOneTShirt,
  shop, 
  
};
