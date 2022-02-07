function multiplicationTable(row, col) {
  const result = [];
  let temp = [];

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      temp.push(i * j);
    }
    result.push(temp);
    temp = [];
  }

  return result;
}

function multiplicationTable(row, col) {
  return Array.from({ length: row }, (_, i) => {
    return Array.from({ length: col }, (elem, idx) => (i + 1) * (idx + 1));
  });
}


console.log(multiplicationTable(2, 2), [[1, 2], [2, 4]]);
console.log(multiplicationTable(3, 3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
console.log(multiplicationTable(3, 4), [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12]]);
console.log(multiplicationTable(4, 4), [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]);
console.log(multiplicationTable(2, 5), [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10]]);
