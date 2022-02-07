function isAValidMessage(message) {
  if (message.length === 0) return true;

  const splitted = message.split(/(\d+)/).filter((x) => x);
  if (!(splitted.length % 2 === 0)) {
    return false;
  }

  const pairs = [];
  for (let i = 0, j = splitted.length; i < j; i += 2) {
    pairs.push(splitted.slice(i, i + 2));
  }

  return pairs.every((pair) => pair[1].length === Number(pair[0]));
}

console.log(isAValidMessage('3hey5hello2hi'), true);
console.log(isAValidMessage('4code13hellocodewars'), true);
console.log(isAValidMessage('3hey5hello2hi5'), false);
console.log(isAValidMessage('code4hello5'), false);
console.log(isAValidMessage('1a2bb3ccc4dddd5eeeee'), true);
console.log(isAValidMessage(''), true);
