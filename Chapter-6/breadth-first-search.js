module.exports = function search(graph, start, checker) {
  const searchQueue = [];
  const checked = [];

  // помещаем в очередь связи первого уровня
  graph[start].forEach(link => {
    searchQueue.push(link);
  });

  // пока в очереди есть элементы
  while(searchQueue.length) {
    let item = searchQueue.shift();
    if (checked.indexOf(item) !== -1) continue;
    checked.push(item);

    if (checker(item)) return item;
    else {
      graph[item].forEach(link => {
        searchQueue.push(link);
      })
    }
  }

  return null;
}
