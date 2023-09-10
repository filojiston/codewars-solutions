function typist(s) {
  let result = 0;
  let isCapsOn = false;

  for (const letter of s) {
    if (
      (isCapsOn && letter === letter.toUpperCase()) ||
      (!isCapsOn && letter === letter.toLowerCase())
    ) {
      result++;
    } else {
      result += 2;
      isCapsOn = !isCapsOn;
    }
  }

  return result;
}

console.log(typist("a"), 1);
console.log(typist("aa"), 2);
console.log(typist("A"), 2);
console.log(typist("AA"), 3);
console.log(typist("aA"), 3);
console.log(typist("Aa"), 4);
console.log(typist("BeiJingDaXueDongMen"), 31);
console.log(typist("AAAaaaBBBbbbABAB"), 21);
console.log(typist("AmericanRAILWAY"), 18);
console.log(typist("AaAaAa"), 12);
console.log(typist("DFjfkdaB"), 11);
