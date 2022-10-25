const VOWELS = "aeiou".split("");

function isAlt(word) {
  const isFirstLetterVowel = VOWELS.includes(word[0]);
  const evens = word.split("").filter((x, idx) => (idx % 2 === 0 ? x : ""));
  const odds = word.split("").filter((x, idx) => (idx % 2 !== 0 ? x : ""));

  if (isFirstLetterVowel) {
    return (
      evens.every((x) => VOWELS.includes(x)) &&
      odds.every((x) => !VOWELS.includes(x))
    );
  }

  return (
    evens.every((x) => !VOWELS.includes(x)) &&
    odds.every((x) => VOWELS.includes(x))
  );
}

// REGEEEEXXXXXXXXXXXXXXXX
function isAlt(word) {
  return !/[aeiou]{2}|[^aeiou]{2}/.test(word);
}

console.log(isAlt("amazon"), true);
