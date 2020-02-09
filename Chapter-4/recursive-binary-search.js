function binarySearch(arr, value, low, high) {
  low = low || 0;
  high = high || arr.length - 1;


  // базовый случай
  if (high <= low) {
    if (arr[low] === value) return low;
    else return undefined;
  }

  // рекурсивный случай
  let mid = Math.floor((low + high) / 2);
  let guess = arr[mid];

  if (guess === value) return mid;

  if (guess > value) high = mid - 1;
  else low = mid + 1;

  return binarySearch(arr, value, low, high);
}

const sortedList = [1, 3, 5, 7, 9];

console.log(binarySearch(sortedList, 1)); // 0
console.log(binarySearch(sortedList, 7)); // 3
console.log(binarySearch(sortedList, -1)); // undefined
