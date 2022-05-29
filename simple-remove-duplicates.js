function solve(arr) {
  const seen = [];
  const result = [];
  for (let i = arr.length - 1; i > -1; i--) {
    const curr = arr[i];
    if (!seen.includes(curr)) result.push(curr);
    seen.push(curr);
  }
  return result.reverse();
}

// clever
function solve(arr) {
  return arr.filter((val, idx) => arr.lastIndexOf(val) == idx);
}

console.log(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3]);
console.log(solve([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3]);
console.log(solve([1, 2, 3, 4]), [1, 2, 3, 4]);
console.log(solve([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1]);
console.log(solve([1, 2, 1, 2, 1, 1, 3]), [2, 1, 3]);
