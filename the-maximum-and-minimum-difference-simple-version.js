function maxAndMin(arr1, arr2) {
  // if you have Nodejs v20, you can use toSorted to not mutate input
  // const arr1Sorted = arr1.toSorted();
  // const arr2Sorted = arr2.toSorted();

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  function findMaxDiff(arr1, arr2) {
    return Math.max(
      Math.abs(arr1[arr1.length - 1] - arr2[0]),
      Math.abs(arr2[arr2.length - 1] - arr1[0])
    );
  }

  function findMinDiff(arr1, arr2) {
    let arr1Idx = 0,
      arr2Idx = 0;
    let diff = Number.MAX_SAFE_INTEGER;

    while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
      const currentDiff = Math.abs(arr1[arr1Idx] - arr2[arr2Idx]);
      if (currentDiff < diff) diff = currentDiff;

      if (arr1[arr1Idx] < arr2[arr2Idx]) arr1Idx++;
      else arr2Idx++;
    }

    return diff;
  }

  return [findMaxDiff(arr1, arr2), findMinDiff(arr1, arr2)];
}

// small and compact solution, liked it but a little bit confusing
function maxAndMin(arr1, arr2) {
  return [
    Math.max(...arr1.map((n) => Math.max(...arr2.map((m) => Math.abs(n - m))))),
    Math.min(...arr1.map((n) => Math.min(...arr2.map((m) => Math.abs(n - m))))),
  ];
}

// like above, but not that confusing
function maxAndMin(arr1, arr2) {
  const diff = [];
  arr1.map((n) => arr2.map((e) => diff.push(Math.abs(n - e))));
  return [Math.max(...diff), Math.min(...diff)];
}

console.log(maxAndMin([3, 10, 5], [20, 7, 15, 8]), [17, 2]);
console.log(maxAndMin([3], [20]), [17, 17]);
console.log(maxAndMin([3, 10, 5], [3, 10, 5]), [7, 0]);
console.log(maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [9, 1]);
