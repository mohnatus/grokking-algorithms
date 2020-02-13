module.exports = function factorial(number) {
  if (number <= 0) throw new Error('Number parametr must be a positive number');

  // базовый случай
  if (number == 1) return 1;

  // рекурсивный случай
  return number * factorial(number - 1);
}
