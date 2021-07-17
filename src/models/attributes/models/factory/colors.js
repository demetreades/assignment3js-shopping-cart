const {
  DATA_Factory,
  looper
} = require('../DATA_Factory');

const {
  COLOR_DATA, 
  COLOR_PRICE
} = require('./_DATA');


const colors = 
new DATA_Factory
(
  Object.keys(COLOR_DATA).indexOf(Object.keys(COLOR_DATA)[0]),
  Object.keys(COLOR_DATA)[0], 
  Object.values(COLOR_DATA)[0], 
  Object.values(COLOR_PRICE)[0]
);

looper(colors, COLOR_DATA, COLOR_PRICE)


module.exports = colors;
