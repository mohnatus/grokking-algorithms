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

function makeShedule(list) {

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

const list = [
  {
    title: 'Рисование',
    from: 9,
    to: 10
  },{
    title: 'Английский',
    from: 9.5,
    to: 10.5
  },{
    title: 'Математика',
    from: 10,
    to: 11
  },{
    title: 'Информатика',
    from: 10.5,
    to: 11.5
  },{
    title: 'Музыка',
    from: 11,
    to: 12
  }
]

console.log(makeShedule(list));