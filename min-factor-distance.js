function minDistance(n) {
  function calculateFactors(n) {
    const result = [1];
    for (let i = 2; i <= n / 2; i++) {
      if (n % i === 0) {
        result.push(i);
      }
    }
    result.push(n);
    return result;
  }

  function calculateMinimumDifference(arr) {
    let result = Infinity;
    for (let i = 1; i < arr.length; i++) {
      const currentDiff = arr[i] - arr[i - 1];
      if (currentDiff < result) {
        result = currentDiff;
      }
    }
    return result;
  }

  const factors = calculateFactors(n);
  return calculateMinimumDifference(factors);
}

console.log(minDistance(8), 1);
console.log(minDistance(25), 4);
console.log(minDistance(13013), 2);
console.log(minDistance(218683), 198);
