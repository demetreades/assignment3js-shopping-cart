const { 

  COLOR_DATA, 
  COLOR_PRICE, 
  SIZE_DATA, 
  SIZE_PRICE, 
  FABRIC_DATA, 
  FABRIC_PRICE 
  
} = require('./factory/_DATA');

const TShirt = require('./tshirt');

// const colors  = require('../models/factory/colors');
// const sizes   = require('../models/factory/sizes');
// const fabrics = require('../models/factory/fabrics');

class DATA_Factory {
  constructor(id, key, data, price) {
  this.id = id;
  this.key = key;
  this.data = data;
  this.price = price;

  return { 
    [this.key]: { 
      id:    this.id, 
      type:  this.data, 
      price: this.price } 
    };
  };
  
};

function formatter(id, type, price) {
  return { id: id, type: type, price: price };
}

function looper(factory, data, price) {
  for(item = 0; item < Object.keys(data).length; item++) {
   factory[Object.keys(data)[item]] = formatter(item+1, Object.values(data)[item], Object.values(price)[item]);
  }
};

function properCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

function getAttribute(attribute) {
  console.log(`\nGET   | Property |  Value`);
  console.log(`------|----------|----------`);
  console.log(`      | ID       |  #${attribute.id}`);
  console.log(`      | TYPE     |  ${attribute.type}`);
  console.log(`      | PRICE    |  ${attribute.price}$\n`)
};


function setAttribute(attribute, type, price) {
  formatted = properCase(type)
  attribute[formatted] = {
    id: Object.keys(attribute).length + 1,
    type: formatted.toUpperCase(),
    price: price
  }
};

function listAttributes(...attribute) {
  console.log(...attribute);
  console.log('::::: END LIST \n');
};

function TShirtGenerator(Color, Size, Fabric, array = []) {
  let sizeOfColors = Object.keys(Color).length
  for(let i = 0; i < sizeOfColors; i++) {
    for(let j = 0; j < sizeOfColors; j++) {
      for(let k = 0; k < sizeOfColors; k++) {
        array.push(
               new TShirt
                (
                  array.length, 
                  Object.values(Color)[i], 
                  Object.values(Size)[j], 
                  Object.values(Fabric)[k]
                )
              );
          }
      }
  }
  return array;
};



// forEach
// =======

// let myTShirt = new TShirt(Color.Red, Size.XS, Fabric.Wool)
// console.log(myTShirt)

// console.log(buyATShirt(myTShirt))
// let tshirts = generateTShirts(Color,Size,Fabric)
// console.log(tshirts)

// =======

// for

// console.time('performance')
// function tshirtGenerator(Color, Size, Fabric, tshirts = []) {
//     let sizeOfColors = Object.keys(Color).length
//     // let sizeOfColors = 2
//     for(let i = 0; i < sizeOfColors; i++) {
//         for(let j = 0; j < sizeOfColors; j++) {
//             for(let k = 0; k < sizeOfColors; k++) {
//                tshirts.push(new TShirt(Object.values(Color)[i], Object.values(Size)[j], Object.values(Fabric)[k]))
//             }
//         }
//     }
//     return tshirts
// }
// console.timeEnd('performance')






module.exports = {
  DATA_Factory,
  formatter,
  looper,

  getAttribute,
  setAttribute,
  
  listAttributes,
  TShirtGenerator,

  // Util
  properCase,
};
