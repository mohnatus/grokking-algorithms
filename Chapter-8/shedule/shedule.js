function getEarliest(list) {
  let earliestIndex = 0;
  let earliestTo = list[earliestIndex].to;

  list.forEach((item, index) => {
    if (item.to < earliestTo) {
      earliestIndex = index;
      earliestTo = item.to;
    }
  });

  return earliestIndex;
}

module.exports = function makeShedule(list) {

  const shedule = [];
  let copiedList = [...list];

  while (copiedList.length) {
    let earliestIndex = getEarliest(copiedList);
    let earliestItem = copiedList[earliestIndex];
    shedule.push(earliestItem);

    copiedList = copiedList.filter(item => item.from >= earliestItem.to);
  }

  return shedule;
}