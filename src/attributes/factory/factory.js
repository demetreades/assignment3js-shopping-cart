function formatter(id, type, price) {
  return { id: id, type: type, price: price };
}

function factoryLoop(object, data, price) {
  Object.values(data).forEach((value, index) => {
    object[Object.keys(data)[index]] = formatter(index+1, Object.values(data)[index], Object.values(price)[index]);
  })
  return object;
};



// Object.defineProperty()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


module.exports = {

  formatter,
  factoryLoop,
  
}
