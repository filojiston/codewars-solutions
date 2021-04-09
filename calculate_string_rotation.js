function shiftedDiff(first, second) {
  const shift = str => str[str.length - 1] + str.substring(0, str.length - 1);

  for (let i = 0; i < first.length; i++) {
    if (first.localeCompare(second) == 0) return i;
    first = shift(first);
  }

  return -1;
}

// lets try recursion
const shift = str => str[str.length - 1] + str.substring(0, str.length - 1);
function shiftedDiff(first, second, counter = 0) {
  if (first.localeCompare(second) == 0) return counter;
  if (counter > first.length) return -1;
  return shiftedDiff(shift(first), second, ++counter);

}

// very clever solution, liked it
function shiftedDiff(first, second) {
  if (first.length != second.length) return -1
  return (second + second).indexOf(first)
}

console.log(shiftedDiff("eecoff", "coffee"), 4)
console.log(shiftedDiff("Moose", "moose"), -1)
console.log(shiftedDiff("isn't", "'tisn"), 2)
console.log(shiftedDiff("Esham", "Esham"), 0)
console.log(shiftedDiff(" ", " "), 0)
console.log(shiftedDiff("hoop", "pooh"), -1)
console.log(shiftedDiff("  ", " "), -1)

