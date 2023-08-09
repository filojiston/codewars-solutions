function cowboysDollars(boots) {
  function countDollars(boot) {
    let count = 0;
    for (const line of boot.split("\n")) {
      if (line.includes("&")) break;

      if (line.includes("[(1)]")) count++;
    }

    return count;
  }

  return `This Rhinestone Cowboy has ${countDollars(
    boots[1]
  )} dollar bills in his right boot and ${countDollars(boots[0])} in the left`;
}

// this is the regex solution i've wanted first
function cowboysDollars([leftBoot, rightBoot]) {
  const countDollars = (boot) =>
    (boot.match(/\[\(1\)\](?=.*&)/gs) || []).length;

  const [left, right] = [leftBoot, rightBoot].map(countDollars);

  return `This Rhinestone Cowboy has ${right} dollar bills in his right boot and ${left} in the left`;
}

var left = [
    "",
    "   ,|___|,",
    "   |[(1)]|",
    "   |     |",
    "   |[(1)]|",
    "   | ==  |",
    "   |[(1)]|",
    "   /    &|",
    ".-'`  ,   )****",
    "|         |   **",
    "`~~~~~~~~~~    ^",
  ],
  right = [
    "",
    "   ,|___|,",
    "   |[(1)]|",
    "   |     |",
    "   |[(1)]|",
    "   | ==  |",
    "   |[(1)]|",
    "   /    &|",
    ".-'`  ,   )****",
    "|         |   **",
    "`~~~~~~~~~~    ^",
  ];
var boots = [left.join("\n"), right.join("\n")];
console.log(
  cowboysDollars(boots),
  "This Rhinestone Cowboy has 3 dollar bills in his right boot and 3 in the left"
);
var left = [
    "",
    "   ,|___|,",
    "   |[(1)]|",
    "   |     |",
    "   |[(1)]|",
    "   | ==  |",
    "   |[(1)]|",
    "   /    &|",
    ".-'`  ,   )****",
    "|         |   **",
    "`~~~~~~~~~~    ^",
  ],
  right = [
    "",
    "   ,|___|,",
    "   |[(1)]|",
    "   |     |",
    "   |[(1)]|",
    "   | ==  |",
    "   |[(1)]|",
    "   /    &|",
    ".-'`  ,   )****",
    "|[(1)]    |   **",
    "`~~~~~~~~~~    ^",
  ];
var boots = [left.join("\n"), right.join("\n")];
console.log(
  cowboysDollars(boots),
  "This Rhinestone Cowboy has 3 dollar bills in his right boot and 3 in the left"
);
var left = [
    "",
    "   ,|___|,",
    "   |[{1}]|",
    "   |[{1}]|",
    "   |[{1}]|",
    "   | ==  |",
    "   |[{1}]|",
    "   /    &|",
    ".-'`  ,   )****",
    "|[{1}]    |   **",
    "`~~~~~~~~~~    ^",
  ],
  right = [
    "",
    "   ,|___|,",
    "   |[(5)]|",
    "   |[(5)]|",
    "   |[(5)]|",
    "   | ==  |",
    "   |[(5)]|",
    "   /    &|",
    ".-'`  ,   )****",
    "|[(5)]    |   **",
    "`~~~~~~~~~~    ^",
  ];
var boots = [left.join("\n"), right.join("\n")];
console.log(
  cowboysDollars(boots),
  "This Rhinestone Cowboy has 0 dollar bills in his right boot and 0 in the left"
);
var left = [
    "",
    "   ,|___|,",
    "   |     |",
    "   |     |",
    "   |[(1)]|",
    "   | ==  |",
    "   |[(1)]|",
    "   /    &|",
    ".-'`  ,   )****",
    "|         |   **",
    "`~~~~~~~~~~    ^",
  ],
  right = [
    "",
    "   ,|___|,",
    "   |[(1)]|",
    "   |     |",
    "   |[(1)]|",
    "   | ==  |",
    "   |[(1)]|",
    "   /    &|",
    ".-'`  ,   )****",
    "|[(1)]    |   **",
    "`~~~~~~~~~~    ^",
  ];
var boots = [left.join("\n"), right.join("\n")];
console.log(
  cowboysDollars(boots),
  "This Rhinestone Cowboy has 3 dollar bills in his right boot and 2 in the left"
);
