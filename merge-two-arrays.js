function mergeArrays(a, b) {
  const result = [];
  while (a.length > 0 || b.length > 0) {
    const firstElem = a.shift();
    const secondElem = b.shift();

    if (firstElem !== undefined) result.push(firstElem);
    if (secondElem !== undefined) result.push(secondElem);
  }

  return result;
}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"]), [
  1,
  "a",
  2,
  "b",
  3,
  "c",
  4,
  "d",
  5,
  "e",
  6,
  7,
  8,
]);
console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]), [
  "a",
  1,
  "b",
  2,
  "c",
  3,
  "d",
  4,
  "e",
  5,
]);
console.log(mergeArrays([2, 5, 8, 23, 67, 6], ["b", "r", "a", "u", "r", "s"]), [
  2,
  "b",
  5,
  "r",
  8,
  "a",
  23,
  "u",
  67,
  "r",
  6,
  "s",
]);
console.log(
  mergeArrays(
    ["b", "r", "a", "u", "r", "s", "e", "q", "z"],
    [2, 5, 8, 23, 67, 6]
  ),
  ["b", 2, "r", 5, "a", 8, "u", 23, "r", 67, "s", 6, "e", "q", "z"]
);
