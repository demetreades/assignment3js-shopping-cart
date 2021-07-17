class StrategyManager {
  constructor() {
    this._strategies = [];
    this._length = this._strategies.length;
  }
  
  add(strategy) {
    this._strategies = [...this._strategies, strategy];
    console.log(`ADD STRATEGY  id: ${strategy._id} , name: ${strategy._name} .\n`);
  }
  
  remove(index) {
    console.log(`\nREMOVE STRATEGY  id: ${this._strategies[(--index)]._id} , name:  ${this._strategies[index]._name} .\n`);
    this._strategies.splice(index, 1)
    this._length = this._strategies.length
    console.log(`List :::: `,this._strategies);
  }
  
  select(index) {
    if(index === undefined) {
      console.log(this._strategies);
      return this._strategies
    }
    if(typeof index === 'string') {
      return this._strategies.find(strategy => strategy._name === index);
    } 
    if(typeof index === 'number'){
      return this._strategies[(--index)];
    }
  }

  toString() {
    return `\n${this._strategies}, length: ${this._length}\n`
  }
    
};


const shop = new StrategyManager()


module.exports = { StrategyManager, shop };
