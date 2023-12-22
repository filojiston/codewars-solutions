function candies(kids) {
  if (kids.length <= 1) {
    return -1;
  }

  const max = Math.max(...kids);
  return kids.reduce((acc, curr) => acc + Math.max(max - curr, 0), 0);
}

console.log(candies([5, 8, 6, 4]), 9);
console.log(candies([1, 2, 4, 6]), 11);
console.log(candies([1, 2]), 1);
console.log(candies([4, 2]), 2);
