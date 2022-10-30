function solution(string, limit) {
  return string.length > limit ? string.slice(0, limit) + '...' : string;
}

console.log(solution('Testing String', 3), 'Tes...');
console.log(solution('Testing String', 8), 'Testing ...');
console.log(solution('Test', 8), 'Test');
