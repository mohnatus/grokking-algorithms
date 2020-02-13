module.exports = function max(arr) {
  if (arr.length === 0) return -Infinity;

  let firstEl = arr[0];
  let newArr = arr.slice(1);
  return Math.max(firstEl, max(newArr));
};