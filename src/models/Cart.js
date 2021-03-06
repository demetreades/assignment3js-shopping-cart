const Order = require('./Order');

class Cart {
  constructor(stock) {
    this.stock = stock;
    this.products = [];
    this.total = 0;
  }

  calc(text) {
    console.log(`\n${text} ----------\n`);
    this.products.forEach((tshirt, index) => {
      console.log(
        `${index + 1}.    PRODUCT #${tshirt.id}: \t| price: ${
          tshirt.price
        }$ \t| size: ${tshirt.size} \t| color: ${
          tshirt.color
        }      \t| fabric: ${tshirt.fabric}  \t ::   ADDED TO YOUR CART`,
      );
      this.total += tshirt.price;
    });
  }

  add(product) {
    this.products = [...this.products, product];
    console.log(
      `ADD PRODUCT  id: ${product.id} , \tsize: ${product.size}, \tcolor: ${product.color} ,  \tfabric: ${product.fabric} ,    \tPRICE: ${product.price}$ `,
    );
  }

  check(index) {
    this.products.push(this.stock.find((tshirt) => tshirt.id === index));
    console.log(`PRODUCT: ${index}# \tchecked`);

    return this;
  }

  buyAll(rate) {
    this.stock.forEach((tshirt, index) => {
      this.products = [
        ...this.products,
        this.stock.find((item) => item.id === index),
      ];
    });

    return this.checkOut(rate);
  }

  checkOut(rate) {
    this.calc('CHECKOUT:');
    console.log('\n------------------');
    console.log(
      `\nCHECK OUT \t with base total price: ${this.total.toFixed(
        2,
      )}$ , Quantity: ${this.products.length}#`,
    );
    this.products = [];
    console.log('\n--------- checkout\n');

    return new Order(this.total, rate, 40); //  last argument labor rate, from 0 to 100
  }

  itemsChecked() {
    console.log(this.products, ':::: in cart:', this.products.length);
  }

  toConsoleString() {
    this.calc('CONSOLE:');

    return `
      Stock:    ${this.stock.length}
      products: ${this.products}
      quantity: ${this.products.length}
      --------------
      total:    ${this.total}\n`;
  }
}

module.exports = Cart;
