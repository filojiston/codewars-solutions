// ex:
// [4, true], [5, false], [3, true]]), [6, 30, 125]
// [6, 6, 5]
// reducing: [6], [6, (6 * 5)] [6, 30, (5 * 5 * 5)]
function countLoopIterations(arr) {
    arr = arr.map(pair => pair[1] ? pair[0] + 2 : pair[0] + 1);
    return arr.reduce((acc, curr, idx) => {
        if (idx !== 0)
            for (let i = idx - 1; i >= 0; i--)
                curr *= arr[i] - 1;
        acc.push(curr);
        return acc;
    }, []);
}

// i did the exact same but backwards. this looks clean
// and more understandable.
// [4, true], [5, false], [3, true]]), [6, 30, 125]
// res: [6], [6, (5 * 6)], [6, 30, (25 * 5)]
// loop: 1, 5, 25
function countLoopIterations(arr) {
  let res = [], loop = 1;
  for (let [count, inclusive] of arr) {
    res.push(loop * (count + inclusive + 1));
    loop *= (count + inclusive);
  }
  return res;
}

console.log(countLoopIterations([[4, true], [5, false], [3, true]]), [6, 30, 125]);
console.log(countLoopIterations([[16, false], [11, false], [1, true], [3, false], [8, true], [10, true], [9, false], [11, true], [20, true], [3, false], [7, false]]), [17, 192, 528, 1408, 10560, 114048, 1045440, 12231648, 248396544, 948423168, 5690539008]);
console.log(countLoopIterations([]), []);
console.log(countLoopIterations([[20, false]]), [21]);
