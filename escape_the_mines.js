class Node {
  constructor(location, path) {
    this.location = location;
    this.path = path;
  }
}

function solve(map, miner, exit) {
  const queue = [];
  const visited = [...map].map(x => x.map(y => !y));

  const destination = [exit.x, exit.y];

  const root = new Node([miner.x, miner.y], []);
  queue.push(root);
  visited[root.location[0]][root.location[1]] = true;

  while (queue.length > 0) {
    const current = queue.shift();

    if (compareLocations(current.location, destination)) return current.path;

    const up = [current.location[0], current.location[1] - 1];
    const down = [current.location[0], current.location[1] + 1];
    const right = [current.location[0] + 1, current.location[1]];
    const left = [current.location[0] - 1, current.location[1]];

    // up
    if (canMove(map, up) && !visited[up[0]][up[1]]) {
      visited[up[0]][up[1]] = true;
      const currentPath = [...current.path];
      currentPath.push('up');
      let x = new Node(up, currentPath);
      queue.push(x);
    }

    // down
    if (canMove(map, down) && !visited[down[0]][down[1]]) {
      visited[down[0]][down[1]] = true;
      const currentPath = [...current.path];
      currentPath.push('down');
      let x = new Node(down, currentPath);
      queue.push(x);
    }

    // right
    if (canMove(map, right) && !visited[right[0]][right[1]]) {
      visited[right[0]][right[1]] = true;
      const currentPath = [...current.path];
      currentPath.push('right');
      let x = new Node(right, currentPath);
      queue.push(x);
    }

    //left
    if (canMove(map, left) && !visited[left[0]][left[1]]) {
      visited[left[0]][left[1]] = true;
      const currentPath = [...current.path];
      currentPath.push('left');
      let x = new Node(left, currentPath);
      queue.push(x);
    }
  }
  return [];
}

function compareLocations(loc1, loc2) {
  return loc1.length === loc2.length && loc1.every((value, index) => value === loc2[index]);
}

function canMove(map, pos) {
  return pos[0] >= 0 && pos[0] < map.length && pos[1] >= 0 && pos[1] < map[0].length && map[pos[0]][pos[1]]
}

// good recursion :>
function solve(map, miner, exit, path = []) {
  if (!map[miner.x] || !map[miner.x][miner.y]) return false;
  if (miner.x == exit.x && miner.y == exit.y) return path;
  map = map.map(v => v.slice());
  map[miner.x][miner.y] = false;
  return solve(map, { x: miner.x, y: miner.y - 1 }, exit, path.concat('up')) ||
    solve(map, { x: miner.x, y: miner.y + 1 }, exit, path.concat('down')) ||
    solve(map, { x: miner.x - 1, y: miner.y }, exit, path.concat('left')) ||
    solve(map, { x: miner.x + 1, y: miner.y }, exit, path.concat('right'));
}

const map = [[true, false],
[true, true]];

console.log(solve(map, { x: 0, y: 0 }, { x: 1, y: 1 }), ['right', 'down']);
