function solveMaze(map) {
  const start = find(map, "start");
  const end = find(map, "end");
  const queue = [start];
  const visited = new Set();
  const parents = {};
  let pathFound = false;

  while (queue.length > 0 && !pathFound) {
    const [x, y] = queue.shift();
    visited.add(`${x},${y}`);
    const neighbors = getNeighbors(map, x, y);
    for (const [nx, ny] of neighbors) {
      if (!visited.has(`${nx},${ny}`)) {
        queue.push([nx, ny]);
        parents[`${nx},${ny}`] = [x, y];
        if (nx === end[0] && ny === end[1]) {
          pathFound = true;
          break;
        }
      }
    }
  }

  let current = end;
  while (!arraysEqual(current, start)) {
    const [x, y] = current;
    map[x][y] = 2;
    current = parents[`${x},${y}`];
  }
  map[start[0]][start[1]] = 2;

  return map;
}

function arraysEqual(arr1, arr2) {
  return arr1[0] === arr2[0] && arr1[1] === arr2[1];
}

function find(map, where) {
  for (let i = 0; i < map.length; i++) {
    if (where === "start") {
      if (map[i][0] === 0) return [i, 0];
    }
    if (where === "end") {
      if (map[i][map[0].length - 1] === 0) return [i, map[0].length - 1];
    }
  }
}

function getNeighbors(map, x, y) {
  const neighbors = [];
  if (x > 0 && map[x - 1][y] === 0) neighbors.push([x - 1, y]);
  if (x < map.length - 1 && map[x + 1][y] === 0) neighbors.push([x + 1, y]);
  if (y > 0 && map[x][y - 1] === 0) neighbors.push([x, y - 1]);
  if (y < map[0].length - 1 && map[x][y + 1] === 0) neighbors.push([x, y + 1]);
  return neighbors;
}

const sampMaze = [
  [1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1],
  [0, 0, 1, 0, 0, 0],
  [1, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1],
];

const sampMazeSolved = [
  [1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 0, 1],
  [1, 2, 1, 2, 1, 1],
  [2, 2, 1, 2, 2, 2],
  [1, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1],
];

console.log(
  JSON.stringify(solveMaze(sampMaze)) === JSON.stringify(sampMazeSolved)
);
