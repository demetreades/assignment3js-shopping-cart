// const { sizes, colors, fabrics } = require('./src/attributes/factory/attributes');
const { sizes, colors, fabrics } = require('./src/attributes/main');
const { Cart } = require('./src/models/cart');
const { TShirt, TShirtGenerator } = require('./src/models/tshirt');






// ////////////////////////////////////////////////////////////////////// //
//                              MAIN APP                                  //
// ////////////////////////////////////////////////////////////////////// //

console.log('\n\t                                   app.js');
console.log('\tSTART ===================================\n');




// ONE TSHIRT
// --------------------------------------------------------------------
const myTSHIRT1 = new TShirt(456, sizes.S, colors.Yellow, fabrics.Wool);
const myTSHIRT2 = new TShirt(552, sizes.XL, colors.Red, fabrics.Silk);
const myTSHIRT3 = new TShirt(652, sizes.L, colors.Blue, fabrics.Rayon);
// console.log(myTSHIRT);
// --------------------------------------------------------------------




// Generates Stock object
// --------------------------------------------------------------------
const Stock = TShirtGenerator(colors, sizes, fabrics, []);
// console.log(Stock);   // <--- all productsrs
// --------------------------------------------------------------------




// Cart
// --------------------------------------------------------------------

const cart = new Cart(Stock);



// Example 1 :: can add one or multiple tshirt items into products array
// ----------------------------------------------------

// cart.add(myTSHIRT1);     //  can add one tshirt object to products
// cart.add(myTSHIRT2);     //  can add one tshirt object to products
// cart.add(myTSHIRT3);     //  can add one tshirt object to products

// cart.checkOut(90);       //  CHECKOUT pass the discount rate from 0 to 100

// ---------




// Example 2 :: buy one or multiply products from Stock
// ----------------------------------------------------

// cart.check(66);               //  takes Stock and adds a product by id to products from Stock list 

// cart.check(80).check(9);      //  takes Stock and adds a product by id to products from Stock list 
// cart.check(1).check(3);       //  takes Stock and adds a product by id to products from Stock list 
// cart.check(229);              //  takes Stock and adds a product by id to products from Stock list 

// cart.itemsChecked();          //  list of available items in products array

// cart.checkOut(80);            //  CHECKOUT pass the discount rate from 0 to 100

// ---------






// Example 3 :: buy all available products from Stock
// -----------------------------------------------
// cart.buyAll(80);              //  checks all products from Stock and checkout
                                   //  with a discount rate from 0 to 100;

// ---------











// --------------------------------------------------------------------


console.log('\n\t===================================== END\n');


// ////////////////////////////////////////////////////////////////////// //
//                                                              END       //
// ////////////////////////////////////////////////////////////////////// //

