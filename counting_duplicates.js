function duplicateCount(text){
  let counts = {};

  for (let i = 0; i < text.length; i++) {
    const currLetter = text[i].toLowerCase();
    if (!counts.hasOwnProperty(currLetter)) {
      counts[currLetter] = 1;
    } else {
      const count = counts[currLetter];
      counts[currLetter] = count + 1;
    }
  }

  let duplicates = 0;

  for (let key in counts) {
    if (counts[key] > 1)  duplicates++;
  }

  return duplicates;
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")