function isDivisible(n, ...args) {
  return args.every(num => n % num === 0);
}

console.log(isDivisible(3, 3, 4), false);
console.log(isDivisible(12, 3, 4), true);
console.log(isDivisible(8, 3, 4, 2, 5), false);
