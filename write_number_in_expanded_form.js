function expandedForm(num) {
  const result = [];
  let multiplier = 1;
  while (num > 0) {
    let curr = (num % 10) * multiplier;
    result.push(curr);
    num = Math.floor(num / 10);
    multiplier *= 10;
  }

  return result.filter(x => x !== 0).reverse().join(' + ');
}


console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');