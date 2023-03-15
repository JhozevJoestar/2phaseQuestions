function foodMaker(food) {
    this.food = food;
}
let hamb = new foodMaker('Hamburger');
let pizza = new hamb.constructor('Pizza');
  
console.log(pizza.food); 