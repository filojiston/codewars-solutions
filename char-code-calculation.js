function calc(x) {
  let total1 = x
    .split("")
    .map((c, i) => c.charCodeAt(0))
    .join("");
  let total2 = total1
    .split("")
    .map((c) => (c == "7" ? "1" : c))
    .join("");

  let total1SumOfDigits = total1
    .split("")
    .map((c) => +c)
    .reduce((a, b) => a + b);
  let total2SumOfDigits = total2
    .split("")
    .map((c) => +c)
    .reduce((a, b) => a + b);

  return total1SumOfDigits - total2SumOfDigits;
}

// nice solution with custom sum function, and good use of regex :( fkin regex
function calc(x) {
  let sum = (n) => [...n].reduce((a, b) => +a + +b);
  let total1 = x.replace(/./g, (x) => x.charCodeAt(0));
  let total2 = total1.replace(/7/g, "1");
  return sum(total1) - sum(total2);
}

console.log(calc("abcdef"), 6);
console.log(calc("ifkhchlhfd"), 6);
console.log(calc("aaaaaddddr"), 30);
console.log(calc("jfmgklf8hglbe"), 6);
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 96);
