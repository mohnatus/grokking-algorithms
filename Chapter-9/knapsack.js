const gcd = require('../Chapter-4/greatest-common-divisor');

function knapsack(items, totalSize) {
	let sizes = items.map(item => item.size).sort((a, b) => a - b);
	let minSize = gcd(totalSize, sizes[0]);
	sizes.forEach(size => {
		minSize = gcd(size, minSize);
	});

	let table = [];
	let cols = totalSize / minSize;
	let rows = items.length;

	for (let y = 0; y < rows; y++) {
		table.push([]);
		// цена текущего предмета
		let currentPrice = items[y].price;
		// размер текущего предмета
		let currentSize = items[y].size;

		for (let x = 0; x < cols; x++) {
			// размер рюкзака
			let availableSize = (x + 1) * minSize;
			let previous;

			if (y > 0) {
				previous = table[y - 1][x];
			}

			if (currentSize > availableSize) {
				table[y][x] = previous;
			} else {
        // оставшееся пространство
				let space = availableSize - currentSize;
				let spaceCell;
				if (space && y > 0) {
          let col = space / minSize - 1;
					spaceCell = table[y - 1][col];
				}

				let totalCellPrice =
					currentPrice + (spaceCell ? spaceCell.price : 0);
				let spaceCellItems = spaceCell ? spaceCell.items : [];

				if (!previous || previous.price < totalCellPrice) {
					table[y][x] = {
						price: totalCellPrice,
						items: [...spaceCellItems, items[y].name]
					};
				} else {
					table[y][x] = previous;
				}
			}
		}
	}

	return table[rows - 1][cols - 1];
}

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
