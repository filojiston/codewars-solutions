function reverseLetter(str) {
  return str.replace(/[^a-zA-Z]/g, '').split('').reverse().join('');
}

console.log(reverseLetter("krishan"),"nahsirk");
console.log(reverseLetter("ultr53o?n"),"nortlu");
console.log(reverseLetter("ab23c"),"cba");
console.log(reverseLetter("krish21an"),"nahsirk");