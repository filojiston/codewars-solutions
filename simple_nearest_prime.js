function solve(n) {
  if (isPrime(n)) return n;
  let i = 1;
  while (true) {
    if (isPrime(n - i)) return n - i;
    if (isPrime(n + i)) return n + i;
    i++;
  }
}

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }

  return true;
}

console.log(solve(3), 3);
console.log(solve(11), 11);
console.log(solve(4), 3);
console.log(solve(110), 109);
console.log(solve(1110), 1109);
console.log(solve(3000), 2999);
console.log(solve(35000), 34981);
console.log(solve(350000), 350003);
console.log(solve(3500000), 3499999);
console.log(solve(10000000000), 10000000019);