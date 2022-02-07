function loneliest(str) {
  const trimmed = str.trim();
  if (!trimmed.includes(' ')) return trimmed.split('');

  const result = {};
  let count = 0;
  let reminder = 0;

  let index = 0;
  while (index < trimmed.length) {
    let current = trimmed[index];
    
    while (trimmed[++index] == ' ') {
      count++;
    }

    if (count || reminder) {
      result[current] = count + reminder;
      reminder = count;
    }
    count = 0;
  }

  return Object.keys(result)
    .sort((a, b) => result[b] - result[a])
    .filter((curr, _, arr) => result[curr] === result[arr[0]]);
}

console.log(loneliest('a'), ['a']);
console.log(loneliest('abc d   ef  g   h i j      '), ['g']);
console.log(loneliest('a   b   c '), ['b']);
console.log(loneliest('  abc  d  z    f gk s '), ['z']);
console.log(loneliest('a  b  c  de  ').sort(), ['b', 'c']);
console.log(loneliest('abc').sort(), ['a', 'b', 'c']);