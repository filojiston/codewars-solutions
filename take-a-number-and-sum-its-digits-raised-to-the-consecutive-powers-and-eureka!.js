function sumDigPow(a, b) {
  const result = [];
  for (let i = a; i <= b; i++) {
    if (isEureka(i))  result.push(i);
  }

  return result;
}

function isEureka(num) {
  const digits = num.toString().split('');
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(digits[i], i + 1);
  }

  return sum == num;
}


console.log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
console.log(sumDigPow(10, 100),  [89])
console.log(sumDigPow(90, 100), [])
console.log(sumDigPow(90, 150), [135])
console.log(sumDigPow(50, 150), [89, 135])
console.log(sumDigPow(10, 150), [89, 135])