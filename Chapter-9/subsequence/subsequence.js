const getMaxSubsequence = require('./max-subsequence');

console.log(getMaxSubsequence('house', 'mouse')); // 4
console.log(getMaxSubsequence('stand', 'hand')); // 3
console.log(getMaxSubsequence('','')); // 0
console.log(getMaxSubsequence('hello','')); // 0
console.log(getMaxSubsequence('','hello')); // 0
console.log(getMaxSubsequence('hello', 'world')); // 1
console.log(getMaxSubsequence('abcdef', 'axbxcxdx')); // 4