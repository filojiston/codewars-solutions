function rotate(str) {
  if (str.length === 0) return [];
  let result = str.split("").map((_, i) => str.slice(i) + str.slice(0, i));
  result.push(result.shift());
  return result;
}

// i tried to achieve this
function rotate(s) {
  return s.split("").map((e) => (s = s.slice(1) + s.slice(0, 1)));
}

// this is also a good solution
const rotate = (str) =>
  [...str].map((_, i) => str.slice(++i) + str.slice(0, i));

const testOut = rotate("Hello");
console.log(testOut);

console.log(testOut.includes("elloH"), true);
console.log(testOut.includes("lloHe"), true);
console.log(testOut.includes("loHel"), true);
console.log(testOut.includes("oHell"), true);
console.log(testOut.includes("Hello"), true);
