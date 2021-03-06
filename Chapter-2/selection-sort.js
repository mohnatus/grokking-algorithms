function findSmallest(list) {
  let smallest = list[0];
  let smallestIndex = 0;

  for (let i = 0, count = list.length; i < count; i++) {
    if (list[i] < smallest) {
      smallest = list[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

module.exports = function selectionSort(list) {
  let sortedList = [];

  for (let i = 0, count = list.length; i < count; i++) {
    let smallest = findSmallest(list);
    sortedList.push(list.splice(smallest, 1)[0]);
  }

  return sortedList;
}
