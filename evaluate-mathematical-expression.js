function calc(expression) {
  let pos = -1,
    currentChar;

  function nextChar() {
    currentChar = ++pos < expression.length ? expression[pos] : -1;
  }

  function eat(charToEat) {
    while (currentChar == ' ') nextChar();
    if (currentChar == charToEat) {
      nextChar();
      return true;
    }

    return false;
  }

  function parse() {
    nextChar();
    return parseExpression();
  }

  function parseExpression() {
    let x = parseTerm();
    for (;;) {
      if (eat('+')) x += parseTerm();
      else if (eat('-')) x -= parseTerm();
      else return x;
    }
  }

  function parseTerm() {
    let x = parseFactor();
    for (;;) {
      if (eat('*')) x *= parseFactor();
      else if (eat('/')) x /= parseFactor();
      else return x;
    }
  }

  function parseFactor() {
    if (eat('+')) return parseFactor();
    if (eat('-')) return -parseFactor();

    let x;
    let startPos = pos;
    if (eat('(')) {
      x = parseExpression();
      eat(')');
    } else if (
      (currentChar >= '0' && currentChar <= '9') ||
      currentChar == '.'
    ) {
      while ((currentChar >= '0' && currentChar <= '9') || currentChar == '.')
        nextChar();
      x = Number(expression.substring(startPos, pos));
    }

    return x;
  }

  return parse();
}

const tests = [
  ['1+1', 2],
  ['1 - 1', 0],
  ['1* 1', 1],
  ['1 /1', 1],
  ['-123', -123],
  ['123', 123],
  ['2 /2+3 * 4.75- -6', 21.25],
  ['12* 123', 1476],
  ['2 / (2 + 3) * 4.33 - -6', 7.732],
  ['12*-1', -12],
  ['12* 123/-(-5 + 2)', -12],
  ['((80 - (19)))', 61],
  ['(1 - 2) + -(-(-(-4)))', 3],
  [
    '(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11) ',
    1,
  ],
];

for (const [input, expected] of tests) {
  console.log(calc(input), expected);
}
