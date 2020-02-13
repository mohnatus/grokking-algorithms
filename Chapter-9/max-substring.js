function getMaxSubsctring(str1, str2) {
  // первую строку размещаем по вертикали (ряды таблицы)
  // вторую по горизонтали (колонки таблицы)
  const rows = str1.length;
  const cols = str2.length;

  if (!rows || !cols) return 0;

  const table = [];

  let max = 0;

  for (let y = 0; y < rows; y++) {
    table.push([]);
    for (let x = 0; x < cols; x++) {
      // если буквы равны
      if (str2[x] === str1[y]) {
        // проверить, совпали ли предыдущие
        let progress = 0;
        if (y > 0 && x > 0) {
          progress = table[y-1][x-1];
        }
        table[y][x] = progress + 1;

        if (table[y][x] > max) max = table[y][x];
      } else {
        table[y][x] = 0;
      }
    }
  }

  return max;
}

console.log(getMaxSubsctring('house', 'mouse')); // 4
console.log(getMaxSubsctring('stand', 'hand')); // 3
console.log(getMaxSubsctring('','')); // 0
console.log(getMaxSubsctring('hello','')); // 0
console.log(getMaxSubsctring('','hello')); // 0
console.log(getMaxSubsctring('hello', 'world')); // 1
console.log(getMaxSubsctring('abcdef', 'axbxcxdx')); // 1
