/*
You are given a string of numbers between 0-9. Find the average of these numbers
 and return it as a floored whole number (ie: no decimal places) written out as
 a string. Eg:
"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/

function averageString(str) {
  if (!str) return 'n/a';

  const lookup = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const digits = str.split(' ');
  let sum = 0;

  for (const digit of digits) {
    const value = lookup.indexOf(digit);
    if (value === -1) return 'n/a';
    sum += value;
  }

  return lookup[Math.floor(sum / digits.length)];
}

// it's very similar with my solution, except it handles the edge cases
// much better than mine imo
// const numbers = [
//   'zero',
//   'one',
//   'two',
//   'three',
//   'four',
//   'five',
//   'six',
//   'seven',
//   'eight',
//   'nine',
// ];

// const averageString = (str) => {
//   const nums = str.split(' ').map((v) => numbers.indexOf(v));
//   if (nums.includes(-1)) return 'n/a';
//   const sum = nums.reduce((prev, cur) => prev + cur);
//   const average = Math.floor(sum / nums.length);
//   return numbers[average];
// };

console.log(averageString('zero nine five two'), 'four');
console.log(averageString('four six two three'), 'three');
console.log(averageString('one two three four five'), 'three');
console.log(averageString('five four'), 'four');
console.log(averageString('zero zero zero zero zero'), 'zero');
console.log(averageString('one one eight one'), 'two');
console.log(averageString(''), 'n/a');
