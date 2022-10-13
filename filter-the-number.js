function filterString(value) {
  return +value.match(/\d+/g).join("");
}

console.log(filterString("123"), 123);
console.log(filterString("a1b2c3"), 123);
console.log(filterString("aa1bb2cc3dd"), 123);
