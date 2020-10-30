// https://medium.com/@lindagmorales94/how-to-solve-a-string-permutation-problem-using-javascript-95ad5c388219

function permutations(string) {
  let letters = string.split(''),
    results = [[letters.shift()]];

  while(letters.length) {
    const currentLetter = letters.shift();
    let tempResults = [];
    results.forEach(result => {
      let rIndex = 0;
      while (rIndex <= result.length) {
        const tmp = [...result];
        tmp.splice(rIndex, 0, currentLetter);
        tempResults.push(tmp);
        rIndex++;
      }
    });
    results = tempResults;
  }

  return results.map(letterArray => letterArray.join(''))
    .filter((el, idx, self) => (self.indexOf(el) === idx));
}

console.log(permutations('a'), ['a']);
console.log(permutations('ab').sort(), ['ab', 'ba'].sort());
console.log(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());