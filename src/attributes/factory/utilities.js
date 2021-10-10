'use strict';

const getAttribute = (attribute) => {
  console.log(`\nGET   | Property |  Value`);
  console.log(`------|----------|----------`);
  console.log(`      | ID       |  #${attribute.id}`);
  console.log(`      | TYPE     |  ${attribute.type}`);
  console.log(`      | PRICE    |  ${attribute.price}$\n`);

  return attribute.type;
};

const setAttribute = (attribute, type, price) => {
  formatted = properCase(type);
  attribute[formatted] = {
    id: Object.keys(attribute).length + 1,
    type: formatted.toUpperCase(),
    price: price,
  };
};

const listAttributes = (...attribute) => {
  console.log('\n::::: LIST START ', ...attribute, '::::: LIST END  \n');
};

const properCase = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

module.exports = {
  getAttribute,
  setAttribute,
  listAttributes,
};
