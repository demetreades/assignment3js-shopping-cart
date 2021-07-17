class Cart {
  constructor(...orders) {
    this.id = orders.length;
    this.orders = orders;
    this.totalPrice = ++orders.basePrice
  }
}


module.exports = Cart;
