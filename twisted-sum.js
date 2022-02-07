function twistedSum(n) {
  return Array.from({length: n}, (_, i) => i + 1).reduce((acc, curr) => {
    curr = curr.toString().split('').map(x => +x).reduce((a, b) => a + b);
    acc += curr;
    return acc;
  }, 0);
}

console.log(twistedSum(3), 6);
console.log(twistedSum(10), 46);
console.log(twistedSum(11), 48);
console.log(twistedSum(12), 51);
