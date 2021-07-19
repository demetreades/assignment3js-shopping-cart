class TShirt {
  constructor(id, color, size, fabric) {
    this.id = id;
    this.size = size.type;
    this.color = color.type;
    this.fabric = fabric.type;
    this.price = +(size.price + color.price + fabric.price).toFixed(2);
  }

  toConsoleString = () => {
    this.prototype.calc();
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


function randomTShirtGenerator(range, colors, sizes, fabrics) {
  random = Math.floor(Math.random() * range);
  // console.log(random, ' :: RANDOM NUMBER!');
  return new TShirt(
    +(Math.random() * (random * range * 10)).toFixed(0) + 1,
    Object.values(sizes)[random],
    Object.values(colors)[random],
    Object.values(fabrics)[random],
  );
  
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
  
  TShirtGenerator, 
  randomTShirtGenerator

};
