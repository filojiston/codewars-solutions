function additionWithoutCarrying(a, b) {
  let sum = "";

  const huge = a > b ? a : b;
  for (let i = huge.toString().length - 1; i >= 0; i--) {
    sum = (((a % 10 || 0) + (b % 10 || 0)) % 10) + sum;
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }

  return +sum;
}

// same but nicer i think
function additionWithoutCarrying(a, b) {
  let res = "";

  while (a > 0 || b > 0) {
    res = (((a % 10) + (b % 10)) % 10) + res;

    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }

  return +res;
}

console.log(additionWithoutCarrying(456, 1734), 1180);
console.log(additionWithoutCarrying(99999, 0), 99999);
console.log(additionWithoutCarrying(999, 999), 888);
console.log(additionWithoutCarrying(0, 0), 0);
