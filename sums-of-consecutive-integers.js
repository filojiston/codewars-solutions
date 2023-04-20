function position(x, y, n) {
  const start = Math.floor((y - calculateSumUpTo(x)) / x);
  return start + n;
}

const calculateSumUpTo = (n) => Math.floor(((n - 1) * (n - 2)) / 2);

console.log(position(4, 14, 3), 5);
console.log(position(2, 25, 0), 12);
console.log(position(7, 749, 5), 109);
console.log(position(3, -9, 1), -3);
console.log(position(5, 0, 0), -2);
