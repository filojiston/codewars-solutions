function cubeOdd(arr) {
  let sum = 0;
  for (const elem of arr) {
    if (isNaN(elem)) return undefined;
    if (elem % 2 === 0) continue;
    sum += Math.pow(elem, 3);
  }
  return sum;
}
