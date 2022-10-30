function findDeletedNumber(arr, mixArr) {
  const sum = (x) => x.reduce((a, b) => a + b, 0);
  return sum(arr) - sum(mixArr);
}

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2, 'Deletion');
console.log(
  findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]),
  5,
  'Deletion'
);
console.log(
  findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]),
  0,
  'No deletion'
);
