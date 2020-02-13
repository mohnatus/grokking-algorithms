const greedySet = require('./greedy-set.js');

// штаты, которые нужно покрыть
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "са", "az"]);

// радиостанции и их покрытие
const stations = {
  "kone": new Set(["id", "nv", "ut"]),
  "ktwo": new Set(["wa", "id", "mt"]),
  "kthree": new Set(["or", "nv", "са"]),
  "kfour": new Set(["nv", "ut"]),
  "kfive": new Set(["ca", "az"])
};

console.log(greedySet(statesNeeded, stations)); // { 'kone', 'ktwo', 'kthree', 'kfive' }