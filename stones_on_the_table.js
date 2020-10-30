function solve(stones) {
  let result = '';

  for (let i = 0; i < stones.length - 1; i++) {
    if (stones[i] !== stones[i+1])  result += stones[i];
  }

  return stones.length - result.length - 1
}

function solve(stones) {
  return stones.split('').reduce((acc, curr, index, arr) => {
    if (curr === arr[index + 1])  acc++;
    return acc;
  }, 0)
}

function solve(stones) {
  return [].reduce.call(stones, (acc, curr, index, arr) => {
    if (curr === arr[index + 1])  acc++;
    return acc;
  }, 0);
}


console.log(solve("RRGGBB"), 3);
console.log(solve("RGBRGB"), 0);
console.log(solve("BGRBBGGBRRR"), 4);
console.log(solve("GBBBGGRRGRB"), 4);
console.log(solve("GBRGGRBBBBRRGGGB"), 7);
