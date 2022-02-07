const findSum = n => Array.from({length: n}, (_, i) => i + 1).filter(x => !(x % 3) || !(x % 5)).reduce((a, b) => a + b);


console.log(findSum(5), 8);
console.log(findSum(10), 33);