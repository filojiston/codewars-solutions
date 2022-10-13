function explode(s) {
  return s
    .split("")
    .map((ch) => ch.repeat(Number(ch)))
    .join("");
}

// i guess it has been very long time i haven't write any js,
// because i forgot that i can use +ch to make it a number
// instead of Number constructor
function explode(s) {
  return s
    .split("")
    .map((ch) => ch.repeat(+ch))
    .join("");
}

const tests = [
  ["312", "333122"],
  ["102269", "12222666666999999999"],
  ["0", ""],
  ["000", ""],
  ["123", "122333"],
];

for (const [input, expected] of tests) console.log(explode(input) === expected);
