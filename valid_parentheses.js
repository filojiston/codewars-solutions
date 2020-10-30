function validParentheses(parens) {
  if (parens[0] == ')' || parens.length % 2 !== 0) return false;

  let parenQueue = [];

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') parenQueue.push(parens[i]);
    else {
      if (parenQueue.length == 0) return false;
      parenQueue.pop();
    }
  }

  return parenQueue.length == 0;
}

function validParentheses(parens) {
  if (parens[0] == ')') return false;

  let parenQueue = [];

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') parenQueue.push(parens[i]);
    else {
      if (parenQueue.length == 0) return false;
      parenQueue.pop();
    }
  }

  return parenQueue.length == 0;
}

function validParentheses(parens) {
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }

  return n == 0;
}

console.log(validParentheses("()"), true);
console.log(validParentheses("())"), false);