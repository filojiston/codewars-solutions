function nicknameGenerator(name) {
  const MIN_LENGTH_NAME = 4;
  if (name.length < MIN_LENGTH_NAME) {
    return "Error: Name too short";
  }

  const vowels = "aeiou".split("");

  if (!vowels.includes(name[2])) {
    return name.substring(0, 3);
  }

  return name.substring(0, 4);
}

// smart, concise solution. i liked it. buuut
// i think it's little bit hard to understand at first sight, because of the 3 + 1 trick
const nicknameGenerator = (name) =>
  name.length > 3
    ? name.slice(0, 3 + "aeiou".includes(name[2]))
    : "Error: Name too short";

console.log(nicknameGenerator("Jimmy"), "Jim");
console.log(nicknameGenerator("Samantha"), "Sam");
console.log(nicknameGenerator("Sam"), "Error: Name too short");
console.log(nicknameGenerator("Kayne"), "Kay", "'y' is not a vowel");
console.log(nicknameGenerator("Melissa"), "Mel");
console.log(nicknameGenerator("James"), "Jam");
