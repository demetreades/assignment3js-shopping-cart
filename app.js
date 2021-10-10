const Cart = require('./src/models/Cart');
const { sizes, colors, fabrics } = require('./src/attributes');
const {
  TShirt,
  TShirtGenerator,
  randomTShirtGenerator,
} = require('./src/models/Tshirt');

// ////////////////////////////////////////////////////////////////////// //
//                              MAIN APP                                  //
// ////////////////////////////////////////////////////////////////////// //

console.log('\n\t^                                  app.js');
console.log('\tSTART ===================================\n\n');

// ---------

// ONE TSHIRT
// -----------------------------------------------------------------
const myTSHIRT1 = new TShirt(456, sizes.S, colors.Yellow, fabrics.Wool);
const myTSHIRT2 = new TShirt(552, sizes.XL, colors.Red, fabrics.Silk);
const myTSHIRT3 = new TShirt(652, sizes.L, colors.Blue, fabrics.Rayon);

// console.log(myTSHIRT1.toConsoleString());
// console.log(myTSHIRT1);
// console.log(myTSHIRT2);
// console.log(myTSHIRT3);
// -----------------------------------------------------------------

// Generates Stock object with all available variations of a tshirt.
// -----------------------------------------------------------------
const stock = TShirtGenerator([], colors, sizes, fabrics);

// console.log(stock);      //  all products array
// -----------------------------------------------------------------

// Cart
// --------------------------------------------------------------------
const cart = new Cart(stock);

// ---------

// Example 1.1 :: can add one or multiple tshirt items into products array
// -----------------------------------------------------------------------

cart.add(myTSHIRT1); //  can add one tshirt object to products
cart.add(myTSHIRT2); //  can add one tshirt object to products
cart.add(myTSHIRT3); //  can add one tshirt object to products

// ---------

// Example 1.2 :: add a random generated tshirt
// --------------------------------------------

// cart.add(randomTShirtGenerator(7, colors, sizes, fabrics));
// cart.add(randomTShirtGenerator(7, colors, sizes, fabrics));
// cart.add(randomTShirtGenerator(7, colors, sizes, fabrics));

// console.log(cart.toConsoleString());

// cart.checkOut(80); //  CHECKOUT pass the discount rate from 0 to 100
// cart.checkOut(90); //  CHECKOUT pass the discount rate from 0 to 100
// cart.checkOut(100); //  CHECKOUT pass the discount rate from 0 to 100

// ---------

// Example 2 :: buy one or multiply products from Stock
// ----------------------------------------------------

// cart.check(26); //  takes Stock and adds a product by id to products from Stock list

// cart.check(81).check(9);  //  takes Stock and adds a product by id to products from Stock list
// cart.check(1).check(3);   //  takes Stock and adds a product by id to products from Stock list
// cart.check(229);          //  takes Stock and adds a product by id to products from Stock list

// cart.itemsChecked();          //  list of available items in products array

// cart.checkOut(80); //  CHECKOUT pass the discount rate from 0 to 100
cart.checkOut(90); //  CHECKOUT pass the discount rate from 0 to 100
// cart.checkOut(100); //  CHECKOUT pass the discount rate from 0 to 100

// ---------

// Example 3 :: buy all available products from Stock
// --------------------------------------------------

// cart.buyAll(80);           // credit card        //  checks all products from Stock and checkout
// cart.buyAll(90);           // money bank         //  checks all products from Stock and checkout
// cart.buyAll(100);          // cash , flat rate   //  checks all products from Stock and checkout
//  with a discount rate from 0 to 100;

// ---------

// Example 4 :: Products in Cart empties after each checkout / order
// -----------------------------------------------------------------

// cart.add(myTSHIRT1);         //  can add one tshirt object to products
// cart.add(myTSHIRT2);         //  can add one tshirt object to products
// cart.add(myTSHIRT3);         //  can add one tshirt object to products

// cart.check(80).check(9);     //  takes Stock and adds a product by id to products from Stock list
// cart.check(1).check(3);      //  takes Stock and adds a product by id to products from Stock list
// cart.check(229);
// cart.checkOut(90);           //  rate: 0.9

// cart.buyAll(80);             //  checks all products from Stock and checkout
//  with a discount rate from 0 to 100;

// cart.add(myTSHIRT2);         //  can add one tshirt object to products

// cart.check(80).check(9);     //  takes Stock and adds a product by id to products from Stock list
// cart.check(1).check(3);      //  takes Stock and adds a product by id to products from Stock list

// cart.checkOut(100);          //  rate: 1 no profit

// ---------

// --------------------------------------------------------------------

console.log('\n\n\t===================================== END\n\n');

// ////////////////////////////////////////////////////////////////////// //
//                                                              END       //
// ////////////////////////////////////////////////////////////////////// //

//
