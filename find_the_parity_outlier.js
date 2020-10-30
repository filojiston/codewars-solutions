function findOutlier(integers) {
  integers.sort((a, b) => Math.abs(a % 2) - Math.abs(b % 2));
  if (integers[0] % 2 == integers[1] % 2) {
    return integers[integers.length - 1];
  } else {
    return integers[0];
  }
}

function findOutlier(integers) {
  integers.sort((a, b) => Math.abs(a % 2) - Math.abs(b % 2));
  return integers[0] % 2 == integers[1] % 2 ? integers[integers.length - 1] : integers[0];
}

// more efficient and nicer solution here, wow
function findOutlier(integers){
  let even = integers.filter(a => a % 2 == 0);
  let odd = integers.filter(a => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);
console.log(findOutlier([1, 1, -1, 1, 1, -44, 7, 7, 7, 7, 7, 7, 7, 7]), -44);
console.log(findOutlier([ 3, 7, -99, 81, 90211, 0, 7 ]), 0);