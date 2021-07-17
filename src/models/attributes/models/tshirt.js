class TShirt {
  constructor(id, size, color, fabric) {
    this.id = id;
    this.size = size.type;
    this.color = color.type;
    this.fabric = fabric.type;
    this.basePrice = parseFloat(size.price + color.price + fabric.price).toFixed(2);
  }

  toString = () => {
    return (
      `id:  this.id , 
      ---------------------
      size: ${this.size} ,
      color: ${this.color} ,
      fabric: ${this.fabric}`
    );
  }

};



module.exports = TShirt;
