function getMaxSubsequence(str1, str2) {
  // первую строку размещаем по вертикали (ряды таблицы)
  // вторую по горизонтали (колонки таблицы)
  const rows = str1.length;
  const cols = str2.length;

  if (!rows || !cols) return 0;

  const table = [];

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
      } else {
        // найти максимальное предыдущее совпадение
        let prevTop = 0, prevLeft = 0;
        if (y > 0) prevTop = table[y-1][x];
        if (x > 0) prevLeft = table[y][x-1];
        table[y][x] = Math.max(prevTop, prevLeft);
      }
    }
  }

  return table[rows-1][cols-1];

}

console.log(getMaxSubsequence('house', 'mouse')); // 4
console.log(getMaxSubsequence('stand', 'hand')); // 3
console.log(getMaxSubsequence('','')); // 0
console.log(getMaxSubsequence('hello','')); // 0
console.log(getMaxSubsequence('','hello')); // 0
console.log(getMaxSubsequence('hello', 'world')); // 1
console.log(getMaxSubsequence('abcdef', 'axbxcxdx')); // 1