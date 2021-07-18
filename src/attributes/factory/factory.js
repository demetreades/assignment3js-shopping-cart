function formatter(id, type, price) {
  return { id: id, type: type, price: price };
}

function factoryLoop(object, data, price) {
  for(item = 0; item < Object.keys(data).length; item++) {
   object[Object.keys(data)[item]] = formatter(item+1, Object.values(data)[item], Object.values(price)[item]);
  }
  return object;
};



module.exports = {

  formatter,
  factoryLoop,
  
}
