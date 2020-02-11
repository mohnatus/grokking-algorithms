exports.getIntersection = function getIntersection(set1, set2) {
  return new Set([...set1].filter(x => set2.has(x)));
}

exports.getDifference = function getDifference(set1, set2) {
  return new Set([...set1].filter(x => !set2.has(x)))
}