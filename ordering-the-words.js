function orderWord(s) {
  if (!s) return "Invalid String!";

  return s.split('').sort().join('');
}

// nicer
const orderWord = (s) => (s ? [...s].sort().join("") : "Invalid String!");


console.log(orderWord("Hello, World!"), " !,HWdellloor");
console.log(orderWord("bobby"), "bbboy");
console.log(orderWord("b"), "b");
console.log(orderWord(""), "Invalid String!");
console.log(orderWord("completesolution"), "ceeillmnooopsttu");
console.log(orderWord('"][@!$*(^&%'), '!"$%&(*@[]^');
console.log(
  orderWord('i"d][@z!$r(^a&world%'),
  '!"$%&(@[]^addilorrwz'
);
console.log(orderWord(null), "Invalid String!");
console.log(orderWord("cba"), "abc");
console.log(orderWord("abc"), "abc");
