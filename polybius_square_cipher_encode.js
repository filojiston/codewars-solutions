const encodeTable = {
  A: 11,
  B: 12,
  C: 13,
  D: 14,
  E: 15,
  F: 21,
  G: 22,
  H: 23,
  I: 24,
  J: 24,
  K: 25,
  L: 31,
  M: 32,
  N: 33,
  O: 34,
  P: 35,
  Q: 41,
  R: 42,
  S: 43,
  T: 44,
  U: 45,
  V: 51,
  W: 52,
  X: 53,
  Y: 54,
  Z: 55,
};

function encodeWithPolybius(word) {
  return word
    .split('')
    .map((letter) => encodeTable[letter])
    .join('');
}

function polybius(text) {
  return text
    .split(' ')
    .map((word) => encodeWithPolybius(word))
    .join(' ');
}

console.log(polybius('CODEWARS'), '1334141552114243', 'CODEWARS');
console.log(
  polybius('POLYBIUS SQUARE CIPHER'),
  '3534315412244543 434145114215 132435231542',
  'POLYBIUS SQUARE CIPHER'
);
