'use strict';

const formatter = (id, type, price) => {
  return { id: id, type: type, price: price };
};

const factoryLoop = (object, data, price) => {
  Object.values(data).forEach((value, index) => {
    object[Object.keys(data)[index]] = formatter(
      index + 1,
      Object.values(data)[index],
      Object.values(price)[index]
    );
  });

  return object;
};

module.exports = {
  formatter,
  factoryLoop,
};
