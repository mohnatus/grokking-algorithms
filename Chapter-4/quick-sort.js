module.exports = function quickSort(arr) {
  // базовый случай
  if (arr.length < 2) return arr;

  // выбираем опорный элемент
  let pivot = arr[0];

  let updatedArr = arr.slice(1);
  let less = updatedArr.filter(el => el <= pivot);
  let greater = updatedArr.filter(el => el > pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
}