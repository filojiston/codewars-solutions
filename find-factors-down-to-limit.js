function factors(integer, limit) {
  const result = [];

  for (let i = limit; i <= integer; i++) {
    if (integer % i === 0) result.push(i);
  }

  return result;
}

console.log(factors(5, 1), [1, 5]);
console.log(factors(30, 2), [2, 3, 5, 6, 10, 15, 30]);
console.log(factors(100, 75), [100]);
console.log(factors(40, 5), [5, 8, 10, 20, 40]);
console.log(factors(1, 5), []);
