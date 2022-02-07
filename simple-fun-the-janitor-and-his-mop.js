function theJanitor(word) {
  // return array, initialized 26 0s
  const alphabet = new Array(26).fill(0);
  // letters we've already seen
  const seen = [];

  // for every letter in word
  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i];
    // if we have seen the letter, continue
    if (seen.includes(currentLetter)) {
      continue;
    }

    // if we dont, calculate the value and update the index in alphabet.
    // also add the letter to the seen array.
    const firstIndex = word.indexOf(currentLetter);
    const lastIndex = word.lastIndexOf(currentLetter);

    // calculate the length
    const len = lastIndex - firstIndex + 1;
    // append the letter to our seen array
    seen.push(currentLetter);
    // update alphabet array
    alphabet[currentLetter.charCodeAt(0) - 97] = len;
  }

  // return our alphabet
  return alphabet;
}

// a clever solution
// function theJanitor(word) {
//   return [...'abcdefghijklmnopqrstuvwxyz'].map((l) => {
//     let a = word.indexOf(l),
//       b = word.lastIndexOf(l);
//     return a === -1 ? 0 : b - a + 1;
//   });
// }

// one liner
// const theJanitor = (w) =>
//   'abcdefghijklmnopqrstuvwxyz'
//     .split('')
//     .map((x) => (w.includes(x) ? w.lastIndexOf(x) - w.indexOf(x) + 1 : 0));

console.log(
  theJanitor('abacaba'),
  [7, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
console.log(
  theJanitor('likemm'),
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
console.log(
  theJanitor('rkuhsxtflzvytbtwxyarsglibmhfmmikyolfmopbtkzxezjahq'),
  [
    30, 27, 0, 0, 1, 29, 1, 46, 8, 1, 41, 27, 12, 0, 5, 1, 1, 20, 17, 35, 1, 1,
    1, 39, 22, 37,
  ]
);
console.log(
  theJanitor('ommnommnomm'),
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ]
);
