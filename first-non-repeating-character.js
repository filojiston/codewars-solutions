function firstNonRepeatingLetter(s) {
  const lowerCased = s.toLowerCase();
  
  for (let i = 0; i < s.length; i++) {
    const currentLetter = lowerCased[i];
    if (lowerCased.indexOf(currentLetter) === lowerCased.lastIndexOf(currentLetter)) return s[i];
  }

  return '';
}

console.log(firstNonRepeatingLetter("a"), "a");
console.log(firstNonRepeatingLetter("stress"), "t");
console.log(firstNonRepeatingLetter("moonmen"), "e");
