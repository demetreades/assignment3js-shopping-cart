class Strategy {
  constructor(index, name, order, callBack) {
    this._id = index;
    this._name = name;
    this._order = order;
    this._callBack = callBack;
  }

  execute() {
    this._callBack();
    return this;
  }

  toString() {
    return `${this._id}# ${this._name}, function: ${this._callBack}`
  }
  
};


// console.log(Strategy);



module.exports = Strategy;
