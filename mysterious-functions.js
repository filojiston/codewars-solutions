function getNum(n) {
  const lookup = {
    0: 1,
    6: 1,
    8: 2,
    9: 1,
  };

  return n
    .toString()
    .split("")
    .map((x) => +lookup[x] || 0)
    .reduce((a, b) => a + b);
}

console.log(getNum(300), 2);
console.log(getNum(90783), 4);
console.log(getNum(123321), 0);
console.log(getNum(89282350306), 8);
console.log(getNum(3479283469), 5);
