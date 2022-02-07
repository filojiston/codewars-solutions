function findMissing(list) {
  const isIncreasing = list[0] < list[1];
  const diff = Math.min(Math.abs(list[1] - list[0]), 
    Math.abs(list[2] - list[1]));

  for (let i = 1; i < list.length; i++) {
    const current = list[0] + (isIncreasing ? (diff * i) : -(diff * i));
    if (current !== list[i])  return current;
  }
}

console.log(findMissing([1, 3, 4]), 2);
console.log(findMissing([-4, -6, -7]), -5);
console.log(findMissing([ 0, 6, 18 ]), 12);
console.log(findMissing([ -9, -7, -6 ]), -8);