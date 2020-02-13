const knapsack = require('./knapsack');

const recorder = {
	name: 'Магнитофон',
	price: 3000,
	size: 4
};
const laptop = {
	name: 'Ноутбук',
	price: 2000,
	size: 3
};
const guitar = {
	name: 'Гитара',
	price: 1500,
	size: 1
};
const iPhone = {
	name: 'iPhone',
	price: 2000,
	size: 1
};
const player = {
  name: "MP3 player",
  price: 1000,
  size: 1
};

console.log(knapsack([recorder, laptop, guitar], 4)); // 3500, Ноутбук + Гитара
console.log(knapsack([recorder, laptop, guitar, iPhone], 4)); // 4000, iPhone + Ноутбук
console.log(knapsack([recorder, laptop, guitar, iPhone, player], 4)); // 4500, плеер+ iPhone + Гитара
