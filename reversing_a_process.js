const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function decode(r) {
  const [num, str] = splitGivenInput(r);

  const mapping = [];
  for (let i = 0; i < alphabet.length; i++) {
    mapping.push((i * num) % alphabet.length);
  }

  if (new Set(mapping).size !== alphabet.length) {
    return 'Impossible to decode';
  }

  let result = '';

  for (const char of str) {
    const idx = alphabet.indexOf(char);
    const actualChar = alphabet.charAt(mapping.indexOf(idx));
    result += actualChar;
  }

  return result;
}

// split encoded string to num + s
function splitGivenInput(input) {
  return input.split(/(\d+)/).filter((x) => x);
}

console.log(decode('6015ekx'));
console.log(decode('5057aan'));
console.log(
  decode('1273409kuqhkoynvvknsdwljantzkpnmfgf', 'uogbucwnddunktsjfanzlurnyxmx')
);
console.log(
  decode('1544749cdcizljymhdmvvypyjamowl', 'mfmwhbpoudfujjozopaugcb')
);
console.log(decode('105860ymmgegeeiwaigsqkcaeguicc', 'Impossible to decode'));
console.log(
  decode('1122305vvkhrrcsyfkvejxjfvafzwpsdqgp', 'rrsxppowmjsrclfljrajtybwviqb')
);
