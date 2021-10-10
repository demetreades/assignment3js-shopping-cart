const { factoryLoop } = require('./factory');
const {
  COLOR_DATA,
  COLOR_PRICE,
  SIZE_DATA,
  SIZE_PRICE,
  FABRIC_DATA,
  FABRIC_PRICE,
} = require('./DATA');

// ////////////////////////////////////////////////////////////////////// //
//                         CREATE NEW ATTRIBUTES                          //
// ////////////////////////////////////////////////////////////////////// //

// console.log('\n\tloops                   ::  attributes.js');
// console.log('\tSTART -----------------------------------\n');

const sizes = factoryLoop({}, SIZE_DATA, SIZE_PRICE);

const colors = factoryLoop({}, COLOR_DATA, COLOR_PRICE);

const fabrics = factoryLoop({}, FABRIC_DATA, FABRIC_PRICE);

// console.log(fabrics.Wool.type);
// console.log(fabrics.Wool.price);

// console.log(colors.Blue.type);
// console.log(colors.Blue.price);

// console.log(sizes.L.type);
// console.log(sizes.L.price);

// console.log('\t------------------------------------- END\n');

// ////////////////////////////////////////////////////////////////////// //
//                                                                        //
// ////////////////////////////////////////////////////////////////////// //

module.exports = {
  sizes,
  colors,
  fabrics,
};
