function upArray(arr) {
  if (arr.length === 0 || arr.some(x => x < 0 || x > 9)) return null;

  let idx = arr.length - 1;
  arr[idx] = arr[idx] + 1;
  let count = 0;

  while (arr[idx] == 10) {
    arr[idx] = 0;
    idx--;
    arr[idx] = arr[idx] + 1;
    count++;
  }

  if (count == arr.length) {
    arr.unshift(1);
    arr = arr.slice(0, arr.length);
    arr = arr.map(x => x == 9 ? 0 : x);
  }

  return arr;
}

// same with my solution but nicer
function upArray(arr) {
  if (arr.length == 0 || arr.some(e => e < 0 || e > 9)) return null

  let i = arr.length - 1

  while (i >= 0 && arr[i] == 9)
    arr[i--] = 0

  if (i < 0)
    arr.unshift(1)
  else
    arr[i]++

  return arr
}

// bignumber.js - wow i didnt know that
// const BigNumber = require('bignumber.js');

function upArray(arr) {
  return arr.length === 0 ||
    arr.filter(x => x < 0 || x > 9).length > 0
    ? null
    : (new BigNumber(arr.join('')).plus(1))
      .toPrecision()
      .split('')
      .map(Number);

}

console.log(upArray([9, 9, 9]), [1, 0, 0, 0]);
console.log(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
console.log(upArray([1, -9]), null);

