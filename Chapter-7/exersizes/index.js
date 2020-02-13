const dijkstra = require('../dijkstra');

const graphA = {
  "start": {
    "a": 5,
    "b": 2
  },
  "a": {
    "c": 4,
    "d": 2
  },
  "b": {
    "a": 8,
    "d": 7
  },
  "c": {
    "finish": 3,
    "d": 6
  },
  "d": {
    "finish": 1
  },
  "finish": {}
};

const graphB = {
  "start": {
    "a": 10
  },
  "a": {
    "b": 20
  },
  "b": {
    "c": 1,
    "finish": 30
  },
  "c": {
    "a": 1
  },
  "finish": {}
};

const graphC = {
  "start": {
    "a": 2,
    "b": 2
  },
  "a": {
    "c": 2,
    "finish": 2
  },
  "b": {
    "a": 2
  },
  "c": {
    "b": -1,
    "finish": 2
  },
  "finish": {}
}

console.log(dijkstra(graphA));
// { cost: 8, path: 'start->a->d->finish' }
console.log(dijkstra(graphB));
// { cost: 60, path: 'start->a->b->finish' }
console.log(dijkstra(graphC));