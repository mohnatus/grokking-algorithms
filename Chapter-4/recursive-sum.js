function sum(arr) {
  if (arr.length === 0) return 0;

  // забираем элементы с начала массива
  let firstEl = arr[0];
  let newArr = arr.slice(1);
  return firstEl + sum(newArr);
}

console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([])); // 0