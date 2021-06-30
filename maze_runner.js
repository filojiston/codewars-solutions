/*
 If you reach the end point before all your moves have gone,
 you should return Finish.

 If you hit any walls or go outside the maze border,
 you should return Dead.

 If you find yourself still in the maze after using all the moves,
 you should return Lost.

 0 -> Safe to Walk
 1 -> Wall
 2 -> Start Point
 3 -> End Point
*/

function mazeRunner(maze, directions) {
  let [x, y] = findStartOnMaze(maze);

  for (const direction of directions) {
    switch (direction) {
      case 'N':
        x--;
        break;
      case 'E':
        y++;
        break;
      case 'W':
        y--;
        break;
      case 'S':
        x++;
        break;
    }

    if (checkIsOutside(maze.length, x, y) || maze[x][y] === 1) return 'Dead';
    if (maze[x][y] === 3) return 'Finish';
  }

  return 'Lost';
}

function findStartOnMaze(maze) {
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze.length; j++) {
      if (maze[i][j] === 2) return [i, j];
    }
  }

  return [-1, -1];
}

function checkIsOutside(n, x, y) {
  return !(x >= 0 && x < n && y >= 0 && y < n);
}

const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

console.log(
  mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E']),
  'Finish',
  'Expected Finish'
);
console.log(
  mazeRunner(maze, [
    'N',
    'N',
    'N',
    'N',
    'N',
    'E',
    'E',
    'S',
    'S',
    'E',
    'E',
    'N',
    'N',
    'E',
  ]),
  'Finish',
  'Expected Finish'
);
console.log(
  mazeRunner(maze, [
    'N',
    'N',
    'N',
    'N',
    'N',
    'E',
    'E',
    'E',
    'E',
    'E',
    'W',
    'W',
  ]),
  'Finish',
  'Expected Finish'
);

console.log(
  mazeRunner(maze, ['N', 'N', 'N', 'W', 'W']),
  'Dead',
  'Expected Dead'
);

console.log(
  mazeRunner(maze, [
    'N',
    'N',
    'N',
    'N',
    'N',
    'E',
    'E',
    'S',
    'S',
    'S',
    'S',
    'S',
    'S',
  ]),
  'Dead',
  'Expected Dead'
);

console.log(
  mazeRunner(maze, ['N', 'E', 'E', 'E', 'E']),
  'Lost',
  'Expected Lost'
);
