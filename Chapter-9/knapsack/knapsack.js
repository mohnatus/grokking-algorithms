const gcd = require('../../Chapter-4/euclidean-algorithm/greatest-common-divisor');


module.exports = function knapsack(items, totalSize) {
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