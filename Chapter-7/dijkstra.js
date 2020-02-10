const dijkstra = require('./dijkstra/index.js');

// представление графа в виде хеш-таблицы
const graph = {
  "start": {
    "a": 6,
    "b": 2
  },
  "a": {
    "finish": 1
  },
  "b": {
    "a": 3,
    "finish": 5
  },
  "finish": {}
};

console.log(dijkstra(graph, "start", "finish"));
// { cost: 6, path: 'start->b->a>finish' }