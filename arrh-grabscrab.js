function grabscrab(anagram, dictionary) {
  const anagramLetterMap = getLetterMap(anagram);

  const result = [];

  for (const word of dictionary) {
    const wordLetterMap = getLetterMap(word);

    if (isMapsMatching(anagramLetterMap, wordLetterMap)) {
      result.push(word);
    }
  }

  return result;
}

function getLetterMap(word) {
  const letterMap = new Map();

  for (const letter of word) {
    if (letterMap.has(letter)) {
      letterMap.set(letter, letterMap.get(letter) + 1);
    } else {
      letterMap.set(letter, 1);
    }
  }

  return letterMap;
}

function isMapsMatching(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }

  for (const [key, val] of map1) {
    const curr = map2.get(key);

    if ((curr === undefined && !map2.has(key)) || curr !== val) {
      return false;
    }
  }

  return true;
}

console.log(
  grabscrab('trisf', ['first']),
  ['first'],
  "Should have found 'first'"
);
console.log(
  grabscrab('oob', ['bob', 'baobab']),
  [],
  'Should not have found anything'
);
console.log(
  grabscrab('ainstuomn', ['mountains', 'hills', 'mesa']),
  ['mountains'],
  "Should have found 'mountains'"
);
console.log(
  grabscrab('oolp', ['donkey', 'pool', 'horse', 'loop']),
  ['pool', 'loop'],
  "Should have found 'pool' and 'loop'"
);
console.log(
  grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey']),
  ['sport', 'ports'],
  "Should have found 'sport' and 'ports'"
);
console.log(
  grabscrab('ourf', ['one', 'two', 'three']),
  [],
  'Should not have found anything'
);
