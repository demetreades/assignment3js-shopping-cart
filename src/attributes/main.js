'use strict';

const { sizes, colors, fabrics } = require('./factory/attributes');
const {
  setAttribute,
  getAttribute,
  listAttributes,
} = require('./factory/utilities');

// ////////////////////////////////////////////////////////////////////// //
//               ADD PROPERTIES ON NEWLY CREATED ATTRIBUTES               //
// ////////////////////////////////////////////////////////////////////// //

// console.log('\n\tattributes                    ::  main.js');
// console.log('\tSTART -----------------------------------\n');

// You can add new properties
// Careful when you add attributes and you want to generate later all combinations
// -------------------------------------------

// 1.
// -----------------------

getAttribute(fabrics.Silk);
getAttribute(colors.Red);

// 2.
// -----------------------

setAttribute(sizes, 'SUPER', 0.8);
setAttribute(sizes, 'ZUPER', 0.7);

setAttribute(fabrics, 'sanel', 55);
setAttribute(fabrics, 'Polymethyl', 22);

setAttribute(colors, 'gold', 2.2);
setAttribute(colors, 'black', 1);

// 3.
// -----------------------

listAttributes(fabrics, sizes, colors);
listAttributes(fabrics);

// console.log('\t------------------------------------- END\n');

// ////////////////////////////////////////////////////////////////////// //
//                                                      main.js  END      //
// ////////////////////////////////////////////////////////////////////// //

module.exports = {
  fabrics,
  colors,
  sizes,
};
