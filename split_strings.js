function solution(str) {
  const result = [];
  let currentString = '';

  for (let i = 0; i < str.length; i++) {
    currentString += str[i];
    if (i % 2 != 0) {
      result.push(currentString);
      currentString = '';
    }
  }

  if (str.length % 2 != 0) {
    result.push(currentString + '_');
  }

  return result;
}


// much better solution...
// i guess i have to learn regex

function solution(str) {
  return (str + '_').match(/../g) || [];
}

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);