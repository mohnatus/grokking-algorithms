const getMaxSubstring = require('./max-substring');

console.log(getMaxSubstring('house', 'mouse')); // 4
console.log(getMaxSubstring('stand', 'hand')); // 3
console.log(getMaxSubstring('','')); // 0
console.log(getMaxSubstring('hello','')); // 0
console.log(getMaxSubstring('','hello')); // 0
console.log(getMaxSubstring('hello', 'world')); // 1
console.log(getMaxSubstring('abcdef', 'axbxcxdx')); // 1
console.log(getMaxSubstring('blue', 'clues')); // 3
