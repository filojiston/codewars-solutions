function solve(a, b) {
  return primesInRange(a, b).filter(prime => isEndUpWithOne(prime)).length;

}

function primesInRange(a, b) {
  let result = [];
  for (let i = a; i < b; i++) {
    if (isPrime(i)) result.push(i);
  }

  return result;
}

function isPrime(num) {
  if (num < 2)  return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }

  return true;
}

function isEndUpWithOne(primeNum) {
  for (let i = 0; i < 10; i++) {
    primeNum = primeNum.toString().split('').map(x => +x * +x).reduce((a, b) => a + b);
    if (primeNum == 1)  return true;
  }

  return false;
}


console.log(solve(1, 25), 4);
console.log(solve(100, 1000), 28);
console.log(solve(100, 2000), 47);
console.log(solve(100, 3000), 65);
console.log(solve(100, 4000), 95);
console.log(solve(24, 2325), 56);