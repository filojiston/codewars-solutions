function sepStr(str) {
  const words = str.split(" ");
  const n = Math.max(...words.map((word) => word.length));
  const result = [];

  for (let i = 0; i < n; i++) {
    const temp = [];
    for (let j = 0; j < words.length; j++) {
      temp.push(words[j][i] || "");
    }
    result.push(temp);
  }

  return result;
}

let result = [
  ["J", "L", "L", "M"],
  ["u", "i", "i", "a"],
  ["s", "v", "f", "n"],
  ["t", "e", "e", ""],
];

console.log(sepStr("Just Live Life Man"));
console.log(sepStr("The Mitochondria is the powerhouse of the cell"));
