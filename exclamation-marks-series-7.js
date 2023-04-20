function remove(string) {
  return string
    .split(" ")
    .filter((word) => word.split("!").length - 1 !== 1)
    .join(" ");
}

console.log(remove("Hi!"), "");
console.log(remove("Hi! Hi!"), "");
console.log(remove("Hi! Hi! Hi!"), "");
console.log(remove("Hi Hi! Hi!"), "Hi");
console.log(remove("Hi! !Hi Hi!"), "");
console.log(remove("Hi! Hi!! Hi!"), "Hi!!");
console.log(remove("Hi! !Hi! Hi!"), "!Hi!");
