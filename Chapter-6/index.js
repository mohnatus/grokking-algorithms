const breadthFirstSearch = require('./breadth-first-search');

// граф друзей на фейсбуке
const graph = {
  'you': ['alice', 'bob', 'claire'],
  'bob': ['anuj', 'peggy'],
  'alice': ['peggy', 'maxim'],
  'claire': ['thom', 'jonny'],
  'anuj': [],
  'peggy': [],
  'thom': [],
  'jonny': [],
  'maxim': [],
};

// проверка, является ли человек продавцом манго
function isMangoSeller(name) {
  return name[name.length - 1] === 'm';
}

console.log(breadthFirstSearch(graph, 'you', isMangoSeller)); // maxim
console.log(breadthFirstSearch(graph, 'claire', isMangoSeller)); // thom