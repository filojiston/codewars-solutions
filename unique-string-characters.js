const solve = (a, b) => [...a].filter((char) => !b.includes(char)).concat([...b].filter((char) => !a.includes(char))).join("");

console.log(solve("xyab", "xzca"), "ybzc");
console.log(solve("xyabb", "xzca"), "ybbzc");
console.log(solve("abcd", "xyz"), "abcdxyz");
console.log(solve("xxx", "xzca"), "zca");
