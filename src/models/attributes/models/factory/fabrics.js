const {
  DATA_Factory,
  looper
} = require('../DATA_Factory');

const {
  FABRIC_DATA, 
  FABRIC_PRICE
} = require('./_DATA');


const fabrics = 
new DATA_Factory
(
  Object.keys(FABRIC_DATA).indexOf(Object.keys(FABRIC_DATA)[0]),
  Object.keys(FABRIC_DATA)[0], 
  Object.values(FABRIC_DATA)[0], 
  Object.values(FABRIC_PRICE)[0]
);

looper(fabrics, FABRIC_DATA, FABRIC_PRICE)


module.exports = fabrics;
