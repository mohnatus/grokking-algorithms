const { getIntersection, getDifference } = require('./set-operations');

// выбирает подмножество,
// в которое входит больше всего непокрытых элементов
const getBestSubset = (setToCover, subsets) => {
	let bestSubset = undefined;
	let covered = new Set();

	Object.keys(subsets).forEach(subset => {
		// сколько еще непокрытых штатов обслуживает станция
		let subsetCovered = getIntersection(setToCover, subsets[subset]);
		if (subsetCovered.size > covered.size) {
			bestSubset = subset;
			covered = subsetCovered;
		}
	});

	return bestSubset;
};

module.exports =
(set, subsets) => {
  let setToCover = new Set([...set]);
	// оптимальный набор подмножеств
	const finalSet = new Set();

	while (setToCover.size) {
		// получить лучшую станцию
		let bestSubset = getBestSubset(setToCover, subsets);
		// добавить ее в финальный набор
		finalSet.add(bestSubset);
		// убрать из набора штатов уже покрытые
		setToCover = getDifference(setToCover, subsets[bestSubset]);
	}

	return finalSet;
};
