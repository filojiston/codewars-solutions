function parseInt(string) {
  const ones =
    'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'
      .split(' ')
      .reduce((acc, word, i) => {
        acc[word] = i;
        return acc;
      }, {});

  const tens = 'twenty thirty forty fifty sixty seventy eighty ninety hundred'
    .split(' ')
    .reduce((acc, word, i) => {
      acc[word] = (i + 2) * 10;
      return acc;
    }, {});

  const thousands = {
    thousand: 1000,
    million: 1000000,
  };

  const lookup = {
    ...ones,
    ...tens,
  };

  let total = 0;
  let currentGroup = 0;

  string = string.replace(/ and /g, ' ').replace(/-/g, ' ');

  for (const word of string.split(' ')) {
    if (word === 'hundred') currentGroup *= lookup[word];
    else if (word in lookup) currentGroup += lookup[word];
    else {
      total += currentGroup * (thousands[word] || 1);
      currentGroup = 0;
    }
  }

  return total + currentGroup;
}

// actually very clever, using split instead of regex replace
// and subtracting the extra value from the total
function parseint(str) {
  const words = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };
  const mult = { hundred: 100, thousand: 1000, million: 1000000 };
  return str.split(/ |-/).reduce(function (value, word) {
    if (words[word]) value += words[word];
    if (mult[word])
      value += mult[word] * (value % mult[word]) - (value % mult[word]);
    return value;
  }, 0);
}

// console.log(parseInt('one'), 1);
// console.log(parseInt('twenty'), 20);
// console.log(parseInt('two hundred forty-six'), 246);
// console.log(parseInt('one thousand three hundred and thirty-seven'), 1337);
console.log(
  parseInt('seven hundred eighty-three thousand nine hundred and nineteen'),
  783919
);
