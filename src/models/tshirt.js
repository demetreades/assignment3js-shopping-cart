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


function TShirtGenerator(array, colors, sizes, fabrics) {
  Object.values(colors).forEach(color => {
    Object.values(sizes).forEach(size => {
      Object.values(fabrics).forEach(fabric => {
        array.push(new TShirt(array.length, color, size, fabric));
      });
    });
  });
  return array;
};




module.exports = { 
  TShirt,
  TShirtGenerator 
};
