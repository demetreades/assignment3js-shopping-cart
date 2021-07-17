const {
  DATA_Factory,
  looper
} = require('../DATA_Factory');

const {
  SIZE_DATA, 
  SIZE_PRICE
} = require('./_DATA');


const sizes = 
new DATA_Factory
(
  Object.keys(SIZE_DATA).indexOf(Object.keys(SIZE_DATA)[0]),
  Object.keys(SIZE_DATA)[0], 
  Object.values(SIZE_DATA)[0], 
  Object.values(SIZE_PRICE)[0]
);

looper(sizes, SIZE_DATA, SIZE_PRICE)


module.exports = sizes;
