function runLengthEncoding(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    let count = 1;
    while (str[i] === str[i + 1]) {
      count++;
      i++;
    }

    result.push([count, ch]);
  }

  return result;
}

// compact solution with regex, at first hard to understand tho
const runLengthEncoding = str =>
  (str.match(/(.)\1*/g) || []).map(val => [val.length, val[0]]);

console.log(runLengthEncoding(""), []);
console.log(runLengthEncoding("abc"), [[1,'a'],[1,'b'],[1,'c']]);
console.log(runLengthEncoding("aab"), [[2,'a'],[1,'b']]);
console.log(runLengthEncoding("hello world!"),
    [[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]);
console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"),
    [[34,'a'], [3,'b']]);
console.log(
    runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"),
    [[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]
);
