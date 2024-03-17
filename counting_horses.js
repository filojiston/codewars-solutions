function countHorses(sound) {
  const horses = sound.split("").map(Number);
  const horseCounts = {};
  for (let i = 0; i < horses.length; i++) {
    const horseSound = horses[i];
    if (horseSound !== 0) {
      let sumOfDivisors = getSumOfDivisors(i + 1, horseCounts);
      let horseCount = horseSound - sumOfDivisors;
      if (horseCount > 0) {
        horseCounts[i + 1] = horseCount;
      }
    }
  }

  const result = [];
  for (const [key, value] of Object.entries(horseCounts)) {
    for (let i = 0; i < value; i++) {
      result.push(Number(key));
    }
  }

  return result;
}

function getSumOfDivisors(num, counts) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0 && counts[i]) {
      sum += counts[i];
    }
  }
  return sum;
}

const exampleCases = [
  ["010101010", [2]],
  ["00000000", []],
  ["0001000100010001000100", [4]],
  ["11111", [1]],
  ["0111020111", [2, 3]],
  ["0212030212", [2, 2, 3]],
  ["122213122213122", [1, 2, 3]],
];

for (const [sound, expected] of exampleCases) {
  const actual = countHorses(sound);
  console.log(actual);
  console.assert(
    JSON.stringify(actual) === JSON.stringify(expected),
    `Expected ${expected} but got ${actual}`
  );
}
