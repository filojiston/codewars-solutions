function vaporcode(string) {
  return string
    .replace(/\s/g, "")
    .split("")
    .map((c) => c.toUpperCase())
    .join("  ");
}

// i don't know which one is better
function vaporcode(string) {
  return string.toUpperCase().replace(/\s/g, "").split("").join("  ");
}

console.log(
  vaporcode("Lets go to the movies"),
  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
);
console.log(
  vaporcode("Why isnt my code working"),
  "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G"
);
