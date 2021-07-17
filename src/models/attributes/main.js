const { 
  // DATA_Factory, 
  // formatter, 
  // looper, 
  setAttribute, 
  properCase, 
  getAttribute,

  listAttributes,

  TShirtGenerator

} = require('./models/DATA_Factory');

const fabrics = require('./models/factory/fabrics')
const colors = require('./models/factory/colors')
const sizes = require('./models/factory/sizes');


// -- imports ------------------------------------------

console.log('\n\n:: ---------------------- attribute main ------- ::\n\n');



let stock = TShirtGenerator(colors,sizes,fabrics)


// bringAttribute(colors.Blue)

// console.log(fabrics);

// setAttribute(fabrics, 'Silka', 222)
// setAttribute(fabrics, 'poli2', 222)
// setAttribute(fabrics, 'poli4', 162)
// setAttribute(fabrics, 'poli1', 142)

// getAttribute(fabrics.Silk)
// getAttribute(fabrics.Silka)
// getAttribute(fabrics.poli4)
// getAttribute(fabrics.poli1)

// console.log(fabrics);


module.exports = {
  sizes,
  colors,
  fabrics,
  stock
};
