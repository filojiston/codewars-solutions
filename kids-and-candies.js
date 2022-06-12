function findGreatestCommonDivisor(a, b) {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

function findLeastCommonMultiple(a, b) {
  return Math.floor((a * b) / findGreatestCommonDivisor(a, b));
}

function candiesToBuy(kids) {
  const arr = Array.from({ length: kids }, (_, idx) => idx + 1);
  return arr.reduce((acc, curr) => findLeastCommonMultiple(curr, acc));
}

console.log(candiesToBuy(1), 1);
console.log(candiesToBuy(2), 2);
console.log(candiesToBuy(3), 6);
console.log(candiesToBuy(4), 12);
console.log(candiesToBuy(5), 60);
console.log(candiesToBuy(10), 2520);
console.log(candiesToBuy(11), 27720);
console.log(candiesToBuy(12), 27720);
console.log(candiesToBuy(20), 232792560);
