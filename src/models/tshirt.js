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
      `id:  ${this.id} , 
      -----------------
      size: ${this.size} 
      color: ${this.color}
      fabric: ${this.fabric}
      -----------------
      Base price: ${this.price}$\n`
    );
  }

};


function TShirtGenerator(Color, Size, Fabric, array = []) {
  let sizeOfColors = Object.keys(Color).length
  for(let i = 0; i < sizeOfColors; i++) {
    for(let j = 0; j < sizeOfColors; j++) {
      for(let k = 0; k < sizeOfColors; k++) {
        array.push(
               new TShirt
                (
                  array.length, 
                  Object.values(Color)[i], 
                  Object.values(Size)[j], 
                  Object.values(Fabric)[k]
                )
              );
          }
      }
  }
  return array;
};



module.exports = { 
  TShirt,
  TShirtGenerator 
};
