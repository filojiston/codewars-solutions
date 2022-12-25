// this solution uses backtracking with recursion to find a solution
// if it does, it immediately returns true, otherwise it returns false
function solution(words) {
  const result = [];
  const visited = new Array(words.length).fill(false);
  const dfs = (_, path) => {
    if (path.length === words.length) {
      result.push(path);
      return true;
    }
    for (let i = 0; i < words.length; i++) {
      if (visited[i]) continue;
      if (
        path.length > 0 &&
        path[path.length - 1][path[path.length - 1].length - 1] !== words[i][0]
      )
        continue;
      visited[i] = true;
      if (dfs(i, path.concat(words[i]))) return true;
      visited[i] = false;
    }
  };
  dfs(0, []);
  return result.length > 0;
}

// similar to mine, but it uses inner dfs function with passing current word
// so no need to use outer function
function solution(words, current = "") {
  if (words.length === 0) {
    return true;
  }
  for (let i = 0; i < words.length; i++) {
    if (current.length === 0 || current[current.length - 1] === words[i][0]) {
      if (
        solution(
          words.slice(0, i).concat(words.slice(i + 1)),
          current + words[i]
        )
      ) {
        return true;
      }
    }
  }
  return false;
}

console.log(
  solution([
    "excavate",
    "endure",
    "desire",
    "screen",
    "theater",
    "excess",
    "night",
  ])
);
console.log(
  solution([
    "trade",
    "pole",
    "view",
    "grave",
    "ladder",
    "mushroom",
    "president",
  ])
);
