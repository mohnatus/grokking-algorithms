// поиск узла с наименьшей стоимостью среди необработанных
function findLowestCostNode(costs, processed) {
  let lowestCost = Infinity;
  let lowestCostNode = undefined;

  Object.keys(costs).forEach(n => {
    if (processed.indexOf(n) !== -1) return;

    if (costs[n] < lowestCost) {
      lowestCost = costs[n];
      lowestCostNode = n;
    }
  });

  return lowestCostNode;
}

// получение цепочки родителей для узла
function getParentsChain(node, parents) {
  let parent = parents[node];
  let chain = [node];

  while (parent !== "start") {
    chain.push(parent);
    parent = parents[parent];
  }

  chain.push(parent);
  chain = chain.reverse().join('->');
  return chain;
}

// предупреждение о ребре с отрицательным весом
function negativeWarning(node1, node2) {
  console.warn(`Обнаружено ребро с отрицательным весом между узлами ${node1} и ${node2}. Возможно получение неправильного результата`);
}

// предупреждение об обновлении веса уже проверенного узла
function updateWarning(node) {
  console.warn(`Обновлен вес уже проверенного узла ${node}. Возможно получение неправильного результата`);
}

module.exports = (graph, start = "start", finish = "finish") => {
  if (!graph.start) {
    throw new Error("Нет стартового узла");
  }

  if (!graph.finish) {
    throw new Error("Нет финишного узла");
  }

  // генерируем таблицу вычисленных стоимостей и таблицу родителей
  const costs = {};
  const parents = {};

  Object.keys(graph).forEach(n => {
    costs[n] = Infinity;
    parents[n] = undefined;
  });

  // заполняем данные для соседних со стартовым узлов
  Object.keys(graph[start]).forEach(n => {
    costs[n] = graph[start][n];

    if (graph[start][n] < 0) negativeWarning(start, n);

    parents[n] = start;
  });


  // уже обработанные узлы
  const processed = [];

  // находим самый дешевый узел (из необработанных)
  let node = findLowestCostNode(costs, processed);
  while (node) {
    // стоимость пути до узла (наименьшая)
    let cost = costs[node];
    // соседи узла
    let neighbors = graph[node];
    // обновить стоимость соседей
    Object.keys(neighbors).forEach(n => {
      let newCost = cost + neighbors[n];
      if (neighbors[n] < 0) negativeWarning(node, n);

      if (costs[n] > newCost) {
        if (processed.indexOf(n) !== -1) updateWarning(n);
        else {
          costs[n] = newCost;
          parents[n] = node;
        }

      }
    })

    // добавляем узел в обработанные
    processed.push(node);

    // находим самый дешевый узел (из необработанных)
    node = findLowestCostNode(costs, processed);
  }

  return {
    cost: costs[finish],
    path: getParentsChain(finish, parents)
  }
}