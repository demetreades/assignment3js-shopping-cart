const Order = require('./order');


class Cart {
  constructor(stock) {
    this.stock = stock;
    this.products = [];
    this.total = 0;
  }

  calc() {
    this.total = 0;
    console.log('\ncalc() -----------\n');
    this.products.forEach((tshirt, index) => {
      console.log(`${index+1}.    PRODUCT #${tshirt.id}: \t| price: ${tshirt.price}$ \t| size: ${tshirt.size} \t| color: ${tshirt.color} \t| fabric: ${tshirt.fabric}\t\t::: ADDED TO YOUR CART`);
      this.total = this.total + tshirt.price
    });
  }

  add(product) {
    this.products = [...this.products, product];
    console.log(`ADD PRODUCT  id: ${product.id} , size: ${product.size} .\n`);
  }

  check(index) {
    this.products.push(this.stock.find(tshirt => tshirt.id === index))
    console.log(`PRODUCT: ${index}# \tchecked`);
    return this; 
  }

  buyAll = (rate) => {
    this.stock.forEach((tshirt, index) => {
      this.products = [...this.products, this.stock.find(tshirt => tshirt.id === index)]
    })
    return this.checkOut(rate);
  }

  checkOut = (rate) => {
    this.calc();
    console.log('\n------------------');
    console.log(`\nCHECK OUT \t with base total price: ${this.total.toFixed(2)}$ , Quantity: ${this.products.length}#`);
    this.products = [];
    console.log('\n--------- checkout\n');
    return new Order(this.total, rate)
  }

  itemsChecked = () => {
    console.log(this.products, ':::: in cart:', this.products.length);
  }

  toConsoleString = () => {
    return (
      `Stock:   ${this.stock.length} , 
      products: ${this.products.length}
      -----------------
      total:    ${this.total}\n` 
    );
  }
  
};



module.exports = { 

  Cart,
  
};
