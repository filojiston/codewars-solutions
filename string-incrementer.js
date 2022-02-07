function incrementString(str) {
  const number = str.match(/\d+$/);
  if (!number) return str + '1';
  
  const digits = number[0].split('').map(num => +num);
  const index = digits.findIndex(elem => elem !== 0);
  const countOfZeros = digits.slice(0, index).length;
  const len = digits.length - countOfZeros;
  const num = parseInt(digits.slice(index).join('')) + 1;

  return `${(str.replace(number[0], '')) + 
    (num.toString().length == len ? '0'.repeat(countOfZeros) : countOfZeros ? '0'.repeat(countOfZeros - 1) : '') +
    (num.toString())}`;
}


console.log(incrementString('foo'), 'foo1');
console.log(incrementString('foo23'), 'foo24');
console.log(incrementString('foo9'), 'foo10');
console.log(incrementString('foo0042'), 'foo0043');
console.log(incrementString('foo099'), 'foo100');
