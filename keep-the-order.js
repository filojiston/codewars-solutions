function keepOrder(ary, val) {
  let left = 0;
  let right = ary.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (ary[mid] >= val) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return left;
}

console.log(keepOrder([1, 2, 3, 4, 7], 5), 4);
console.log(keepOrder([1, 2, 3, 4, 7], 0), 0);
console.log(keepOrder([1, 1, 2, 2, 2], 2), 2);
console.log(keepOrder([1, 2, 3, 4], 5), 4);
console.log(keepOrder([1, 2, 3, 4], -1), 0);
console.log(keepOrder([1, 2, 3, 4], 2), 1);
console.log(keepOrder([1, 2, 3, 4], 0), 0);
console.log(keepOrder([1, 2, 3, 4], 1), 0);
console.log(keepOrder([1, 2, 3, 4], 2), 1);
console.log(keepOrder([1, 2, 3, 4], 3), 2);
console.log(keepOrder([-5, -4, -2, -1, 1, 2], -2), 2);
