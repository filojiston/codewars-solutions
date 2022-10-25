function alternateCase(s) {
  return s
    .split("")
    .map((c) => alternate(c))
    .join("");
}

function alternate(char) {
  return char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase();
}

console.log(alternateCase("abc"), "ABC");
console.log(alternateCase("ABC"), "abc");
console.log(alternateCase("Hello World"), "hELLO wORLD");
