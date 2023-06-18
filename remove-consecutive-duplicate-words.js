function removeConsecutiveDuplicates(string) {
  const words = string.split(" ");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== words[i + 1]) {
      result.push(words[i]);
    }
  }
  return result.join(" ");
}

console.log(removeConsecutiveDuplicates(""), "");
console.log(removeConsecutiveDuplicates("alpha"), "alpha");
console.log(removeConsecutiveDuplicates("alpha alphaalpha alphaalphaalpha"), "alpha alphaalpha alphaalphaalpha");
console.log(removeConsecutiveDuplicates(
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"),
  "alpha beta gamma delta alpha beta gamma delta"
);
console.log(removeConsecutiveDuplicates("alpha alpha alpha alpha"), "alpha");
console.log(removeConsecutiveDuplicates("alpha beta alpha"), "alpha beta alpha");
console.log(removeConsecutiveDuplicates("alpha alphabeta alphagamma"), "alpha alphabeta alphagamma");
console.log(removeConsecutiveDuplicates("alpha alpha beta alpha alpha"), "alpha beta alpha");
console.log(removeConsecutiveDuplicates("alpha beta beta"), "alpha beta");
