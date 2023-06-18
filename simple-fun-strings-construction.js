function stringsConstruction(A, B) {
  let lettersOfA = getLetterMap(A);
  let lettersOfB = getLetterMap(B);

  let min = Infinity;
  for (let letter in lettersOfA) {
    let count = Math.floor(lettersOfB[letter] / lettersOfA[letter]) || 0;
    if (count < min) min = count;
  }

  return min == Infinity ? 0 : min;
}

function getLetterMap(word) {
  return word.split("").reduce((acc, letter) => {
    acc[letter] = acc[letter] ? acc[letter] + 1 : 1;
    return acc;
  }, {});
}

console.log(stringsConstruction("abc", "abccba"), 2);
console.log(
  stringsConstruction(
    "hnccv",
    "hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn"
  ),
  3
);
console.log(stringsConstruction("abc", "def"), 0);
console.log(stringsConstruction("zzz", "zzzzzzzzzzz"), 3);
console.log(stringsConstruction("mmcy", "cyic"), 0);
