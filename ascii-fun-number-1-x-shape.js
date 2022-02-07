function x(n) {
  const full = '■';
  const empty = '□';

  const result = [];
  const midPoint = Math.floor(n / 2);
  let spacesBetween = n - 2;
  let spaces = 0;
  for (let i = 0; i < n; i++) {
    let temp = '';

    // spaces at the beginning
    for (let j = 0; j < spaces; j++) {
      temp += empty;
    }

    // first symbol
    temp += full;

    // spaces between
    for (let j = 0; j < spacesBetween; j++) {
      temp += empty;
    }

    // second symbol (only add if i != mid)
    if (i != midPoint) {
      temp += full;
    }

    // spaces at the end
    for (let j = 0; j < spaces; j++) {
      temp += empty;
    }

    if (i < midPoint) {
      spacesBetween -= 2;
      spaces++;
    } else {
      spacesBetween += 2;
      spaces--;
    }

    result.push(temp);
  }

  return result.join('\n');
}

// this is a nice solution
const x = (n) =>
  Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => {
      if (i === j) return '■';
      if (i === n - 1 - j) return '■';
      return '□';
    }).join('')
  ).join('\n');
