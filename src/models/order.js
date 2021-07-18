class Order {
  constructor(amount, rate) {
    this.rate = rate / 100
    this.discount = (this.rate * amount).toFixed(2);
    console.log(`NEW ORDER: RATE ::: \t ${rate}% :: ${this.rate} :: ${amount.toFixed(2)}$  with discount: ${+this.discount}$\n`);
    console.log('-------------- s n \n');
  }
};



module.exports = Order;
