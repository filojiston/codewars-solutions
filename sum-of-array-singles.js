function repeats(arr) {
  const haveSeen = [];
  for (const num of arr) {
    if (!haveSeen.includes(num)) {
      haveSeen.push(num);
    } else {
      haveSeen.splice(haveSeen.indexOf(num), 1);
    }
  }
  return haveSeen.reduce((a, b) => a + b);
}

// the solution i've been looking for
function repeats(arr) {
  return arr.filter(elem => arr.indexOf(elem) === arr.lastIndexOf(elem)).reduce((a, b) => a + b);
}

console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
console.log(repeats([9, 10, 19, 13, 19, 13]), 19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(repeats([5, 10, 19, 13, 10, 13]), 24);
