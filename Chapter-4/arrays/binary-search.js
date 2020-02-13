const binarySearch = require('./recursive-binary-search');

const sortedList = [1, 3, 5, 7, 9];

console.log(binarySearch(sortedList, 1)); // 0
console.log(binarySearch(sortedList, 7)); // 3
console.log(binarySearch(sortedList, -1)); // undefined
