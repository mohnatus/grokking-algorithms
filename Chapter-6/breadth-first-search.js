// граф друзей на фейсбуке
const graph = {};
graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy', 'maxim'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];
graph['maxim'] = [];

// проверка, является ли человек продавцом манго
function isMangoSeller(name) {
  return name[name.length - 1] === 'm';
}

function search(name) {
  const searchQueue = [];
  const checked = [];

  // помещаем в очередь связи первого уровня
  graph[name].forEach(friendName => {
    searchQueue.push(friendName);
  });

  // пока в очереди есть элементы
  while(searchQueue.length) {
    let person = searchQueue.shift();
    if (checked.indexOf(person) !== -1) continue;
    checked.push(person);

    if (isMangoSeller(person)) return person;
    else {
      graph[person].forEach(friendName => {
        searchQueue.push(friendName);
      })
    }
  }

  return "No mango seller";
}

console.log(search('you')); // maxim
console.log(search('claire')); // thom
