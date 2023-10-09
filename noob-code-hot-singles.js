function hotSingles(arr1, arr2) {
  const result = new Set();

  for (const elem of arr1) {
    if (arr2.indexOf(elem) === -1) {
      result.add(elem);
    }
  }

  for (const elem of arr2) {
    if (arr1.indexOf(elem) === -1) {
      result.add(elem);
    }
  }

  return [...result];
}

// clever
const hotSingles = (arr1, arr2) =>
  [...new Set([...arr1, ...arr2])].filter(
    (val) => !arr1.includes(val) || !arr2.includes(val)
  );

console.log(hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]), [4, 5]);
console.log(hotSingles(["tartar", "blanket", "domino"], ["blanket"]), [
  "tartar",
  "domino",
]);
console.log(
  hotSingles([77, "basketweave"], [78, 42, "basketweave"]),
  [77, 78, 42]
);
console.log(hotSingles([100, 45, "ciao"], [100, 2, 3, 45, 5]), [
  "ciao",
  2,
  3,
  5,
]);
console.log(
  hotSingles([10, 200, 30], [10, 20, 3, 4, 5, 200]),
  [30, 20, 3, 4, 5]
);
console.log(hotSingles([1, 2, 3], [3, 3, 2, 1]), []);
console.log(hotSingles([], []), []);
console.log(hotSingles([1, 2, 3, 3], []), [1, 2, 3]);
