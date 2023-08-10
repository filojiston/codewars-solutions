function encode(str) {
  const lookup = 'abcdefghijklmnopqrstuvwxyz';
  return str.split('').map(letter => {
    const result = lookup.indexOf(letter.toLowerCase());
    return result === -1 ? letter : result + 1;
  }).join('');
}

console.log(encode('abc'), '123');
console.log(encode('ABCD'), '1234');
console.log(encode('ZzzzZ'), '2626262626');
console.log(encode('abc-#@5'), '123-#@5');
