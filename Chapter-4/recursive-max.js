function max(arr) {
  if (arr.length === 0) return -Infinity;

  let firstEl = arr[0];
  let newArr = arr.slice(1);
  return Math.max(firstEl, max(newArr));
}

console.log(max([1,2,100,4])); // 100
console.log(max([-1, -4, -10])); // -1