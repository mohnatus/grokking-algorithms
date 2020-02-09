function factorial(number) {
  if (number <= 0) throw new Error('Number parametn must be a positive number');

  // базовый случай
  if (number == 1) return 1;

  // рекурсивный случай
  return number * factorial(number - 1);
}

console.log(factorial(3)); // 6
console.log(factorial(6)); // 720
console.log(factorial(1)); // 1
console.log(factorial(-1)); // Error