function switcheroo(x) {
  const characterMap = { a: "b", b: "a", c: "c" };

  return x
    .split("")
    .map((ch) => characterMap[ch])
    .join("");
}

// how can we forget our dear regex solutions :))
const switcheroo = (x) => x.replace(/[ab]/g, (x) => (x == "a" ? "b" : "a"));

console.log(switcheroo("abc"), "bac");
console.log(switcheroo("aaabcccbaaa"), "bbbacccabbb");
console.log(switcheroo("ccccc"), "ccccc");
