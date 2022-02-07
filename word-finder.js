class Dictionary {
  constructor(words) {
    this.words = words;
  }

  getMatchingWords(pattern) {
    const result = [];
    for (const word of this.words) {
      if (word.length !== pattern.length) continue;

      let doIAdd = word
        .split("")
        .every(
          (letter, idx) => pattern[idx] === letter || pattern[idx] === "?"
        );

      if (doIAdd) result.push(word);
    }

    return result;
  }

  getMatchingWords(pattern) {
    return this.words.reduce((acc, curr) => {
      if (curr.length !== pattern.length) return acc;
      let doIAdd = curr
        .split("")
        .every(
          (letter, idx) => pattern[idx] === letter || pattern[idx] === "?"
        );

      if (doIAdd) acc.push(curr);
      return acc;
    }, []);
  }
}

// oh yeah, we could use regex bcs regex's "." == this kata's "?"
// so why not :)
/* function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function (pattern) {
  return this.words.filter(val => new RegExp(`^${pattern}$`.replace(/\?/g, `.`)).test(val));
}; */

const fruits = new Dictionary(["banana", "apple", "papaya", "cherry"]);
console.log(fruits.getMatchingWords("lemon")); // must return []
console.log(fruits.getMatchingWords("cherr??")); // must return []
console.log(fruits.getMatchingWords("?a?a?a")); // must return ['banana', 'papaya']
console.log(fruits.getMatchingWords("??????")); // must return ['banana', 'papaya', 'cherry']
