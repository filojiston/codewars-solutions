// Sort "array" so that all elements with the value of zero are moved to the
// end of the array, while the other elements maintain order.
// [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
// Zero elements also maintain order in which they occurred.
// [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

// Do not use any temporary arrays or objects. Additionally, you're not able
// to use any Array or Object prototype methods such as .shift(), .push(), etc

// the correctly sorted array should be returned.

function removeZeros(array) {
  // so basically, when we saw a zero element we should move it to the end of the array
  let i = 0;
  let loopEnder = 0;
  while (i < array.length && loopEnder < array.length) {
    if (isZeroElement(array[i])) {
      shiftElementToEndOfTheArray(array, i);
    } else {
      i++;
    }
    loopEnder++;
  }
  return array;
}

function isZeroElement(element) {
  return element === 0 || element === "0";
}

function shiftElementToEndOfTheArray(arr, index) {
  if (index < 0) return;
  for (let i = index; i < arr.length - 1; i++) {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}

let result = removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]);
console.log(result);

result = removeZeros([0, "0", 1, 2, 3]);
console.log(result);
