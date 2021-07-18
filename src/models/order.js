class Order {
  constructor(amount, rate, labor) {
    this.rate = rate / 100;
    this.labor = amount * (labor / 100);
    this.discount = ((this.rate * amount) + this.labor).toFixed(2);
    console.log(`NEW ORDER: \t  base price: ${amount.toFixed(2)}$ , labor costs: ${this.labor.toFixed(2)}$, \n\t\t  discount:  ${rate}% , rate: ${this.rate} \n\t\t  final discount: ${+this.discount}$\n`);
    console.log('------------ order \n');
  }

};



module.exports = Order;
