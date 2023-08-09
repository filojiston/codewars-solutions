function getMean(arr, x, y) {
  function calculateMean(elems) {
    return elems.reduce((a, b) => a + b) / elems.length;
  }

  if (x <= 1 || x > arr.length || y <= 1 || y > arr.length) return -1;

  return calculateMean([
    calculateMean(arr.slice(0, x)),
    calculateMean(arr.slice(arr.length - y)),
  ]);
}

console.log(getMean([1, 3, 2, 4], 2, 3), 2.5);
console.log(getMean([1, 3, 2], 2, 2), 2.25);
console.log(getMean([1, 3, 2, 4], 1, 2), -1);
console.log(getMean([1, 3, 2, 4], 2, 8), -1);
