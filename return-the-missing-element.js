function getMissingElement(superImportantArray) {
  // sum of all numbers - sum of numbers in the array -> missing element
  return 45 - superImportantArray.reduce((a, b) => a + b);
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]), 8);
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]), 3);
