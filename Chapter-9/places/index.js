const knapsack = require('../knapsack/knapsack');

const places = [
  {
    name: "Westminster Abbey",
    price: 7,
    size: 0.5
  },{
    name: "Globus Theatre",
    price: 6,
    size: 0.5
  },{
    name: "National Gallery",
    price: 9,
    size: 1
  },{
    name: "British Museum",
    price: 9,
    size: 2
  },{
    name: "St Paul's Cathedral",
    price: 8,
    size: 0.5
  }
]

console.log(knapsack(places, 2)); // 24, Westminster Abbey + National Gallery + St Paul's Cathedral
