class TShirt {
  constructor(id, size, color, fabric) {
    this.id = id;
    this.size = size.type;
    this.color = color.type;
    this.fabric = fabric.type;
    this.price = +(size.price + color.price + fabric.price).toFixed(2);
  }

  toConsoleString = () => {
    return (
      ` id:  ${this.id}# 
      -----------------
      size: ${this.size} 
      color: ${this.color}
      fabric: ${this.fabric}
      -----------------
      Base price: ${this.price}$\n`
    );
  }

};

function TShirtGenerator(colors, sizes, fabrics, array = []) {
let count = 0;
  Object.values(colors).forEach(color => {
    console.log(color);
    Object.values(sizes).forEach(size => {
      console.log(size);
      Object.values(fabrics).forEach(fabric => {
        count++
        console.log(fabric);
        array.push(new TShirt(count, color, size, fabric))
      });
    });
  });
  return array;
};



module.exports = { 
  TShirt,
  TShirtGenerator 
};
