function listSquared(m, n) {
  const result = [];

  for (let i = m; i <= n; i++) {
    const resultOfFunction = isSumOfDivisorsSquared(i);
    if (resultOfFunction.result) result.push([i, resultOfFunction.sum]);
  }

  return result;
}

function isSumOfDivisorsSquared(num) {
  const divisors = [1];
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) divisors.push(i);
  }
  const squaredDivisors = divisors.map(x => Math.pow(x, 2));
  const sumOfDivisors = squaredDivisors.reduce((a, b) => a + b);
  return {
    'sum': sumOfDivisors,
    'result': Number.isInteger(Math.sqrt(sumOfDivisors))
  };
}


console.log(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]]);
//console.log(listSquared(42, 250), [[42, 2500], [246, 84100]]);
//console.log(listSquared(250, 500), [[287, 84100]]);
