const { stock } = require('./src/models/attributes/main');
const { shop, buyOneTShirt } = require('./src/models/strategies');
const { 
  setAttribute, 
  
  getAttribute,
  listAttributes,

  TShirtGenerator

} = require('./src/models/attributes/models/DATA_Factory');

const { 
  sizes,
  colors,
  fabrics,
} = require('./src/models/attributes/main');

const Cart = require('./src/models/cart');
const cart = new Cart([]);

// console.log(sizes.XS.type);
// console.log(sizes.XS.price);
// console.log(colors.Blue.type);
// console.log(colors.Blue.price);
// console.log(fabrics.Silk.type);
// console.log(fabrics.Silk.price);

setAttribute(fabrics, 'saNEL', 44)
setAttribute(fabrics, 'polYTHELin', 25)

getAttribute(fabrics.Silk);
getAttribute(colors.Yellow);

// listAttributes(fabrics, colors, sizes)

buyOneTShirt(333, stock, cart)
console.log(buyOneTShirt(12, stock));

console.log('----------------------------------');
console.log('----------------------------------\n\n');




// console.log(shop);


//  EXECUTES
shop.select(1).execute();
shop.select(2).execute();
shop.select(3).execute();











// module.exports = {
//   shop
// }

console.log('\n\n----------------------------------');
console.log('----------------------------------');


