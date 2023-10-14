function doMath(string) {
  // converts a word to (num, order) tuple
  function wordToTuple(word) {
    let num = "";
    let order = "";

    for (const letter of word) {
      if (letter >= "0" && letter <= "9") {
        num += letter;
      } else {
        order = letter;
      }
    }

    return [+num, order.charCodeAt(0) - 96];
  }

  const sum = (a, b) => a + b;
  const minus = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  const ops = [divide, sum, minus, multiply];

  const parsed = string.split(" ").map((word) => wordToTuple(word));
  parsed.sort((a, b) => {
    return a[1] - b[1];
  });

  let result = parsed[0][0];
  for (let i = 1; i < parsed.length; i++) {
    result = ops[i % ops.length](result, parsed[i][0]);
  }

  return Math.round(result);
}

console.log(doMath("24z6 1z23 y369 89z 900b"), 1414);
console.log(doMath("24z6 1x23 y369 89a 900b"), 1299);
console.log(doMath("10a 90x 14b 78u 45a 7b 34y"), 60);
console.log(doMath("111a 222c 444y 777u 999a 888p"), 1459);
console.log(doMath("1z 2t 3q 5x 6u 8a 7b"), 8);
console.log(doMath("u110 89k3 41u8 v106 79g2 356c 484j j201 o470"), 2009);
