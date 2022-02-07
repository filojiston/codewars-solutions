const DENSITIES = {
  H: 1.36,
  W: 1.0,
  A: 0.87,
  O: 0.8,
};

function separateLiquids(glass) {
  if (glass.length == 0) return [];
  const elemSize = glass[0].length;

  const elems = glass
    .reduce((acc, val) => [...acc, ...val], [])
    .sort((a, b) => DENSITIES[a] - DENSITIES[b]);
  const result = [];

  for (let i = 0, j = elems.length; i < j; i += elemSize) {
    result.push(elems.slice(i, i + elemSize));
  }

  return result;
}

console.log(
  separateLiquids([
    ['H', 'H', 'W', 'O'],
    ['W', 'W', 'O', 'W'],
    ['H', 'H', 'O', 'O'],
  ]),
  [
    ['O', 'O', 'O', 'O'],
    ['W', 'W', 'W', 'W'],
    ['H', 'H', 'H', 'H'],
  ],
  ''
);

console.log(
  separateLiquids([
    ['A', 'A', 'O', 'H'],
    ['A', 'H', 'W', 'O'],
    ['W', 'W', 'A', 'W'],
    ['H', 'H', 'O', 'O'],
  ]),
  [
    ['O', 'O', 'O', 'O'],
    ['A', 'A', 'A', 'A'],
    ['W', 'W', 'W', 'W'],
    ['H', 'H', 'H', 'H'],
  ],
  ''
);

console.log(
  separateLiquids([['A'], ['H'], ['W'], ['O']]),
  [['O'], ['A'], ['W'], ['H']],
  ''
);

console.log(
  separateLiquids([]),
  [],
  'Empty array should be returned if given.'
);
