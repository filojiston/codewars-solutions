// function knights_tour(start, size) {
//   // variable for store the result
//   const result = [];
//
//   // create the board
//   const board = [];
//
//   // initialize the board
//   for (let i = 0; i < size; i++) {
//     let temp = [];
//     for (let j = 0; j < size; j++) {
//       temp.push(0);
//     }
//     board.push(temp);
//   }
//
//   // possible moves for knight
//   const moveX = [2, 1, -1, -2, -2, -1, 1, 2];
//   const moveY = [1, 2, 2, 1, -1, -2, -2, -1];
//
//   // mark visited knight's initial position
//   const [startX, startY] = start;
//   board[startX][startY] = 1;
//   result.push([startX, startY]);
//
//   // counter for total moves - which will break recursion
//   let totalMoves = 1;
//
//   // since there'll be always a solution, we dont need to check
//   solve(size, board, startX, startY, moveX, moveY, totalMoves, result);
//   return result;
// }
//
// function solve(n, board, currX, currY, moveX, moveY, totalMoves, result) {
//   if (totalMoves == n * n) return true;
//
//   for (let i = 0; i < 8; i++) {
//     let newX = currX + moveX[i];
//     let newY = currY + moveY[i];
//     if (isValid(newX, newY, board)) {
//       board[newX][newY] = 1;
//       result.push([newX, newY])
//       if (solve(n, board, newX, newY, moveX, moveY, totalMoves + 1, result))  return true;
//
//       board[newX][newY] = 0;
//       result.pop();
//     }
//   }
//   return false;
// }
//
// function isValid(x, y, board) {
//   return x >= 0 && y >= 0 && x < board.length && y < board.length && !board[x][y];
// }

// credits to https://dev.to/moresaltmorelemon/a-naive-knights-tour-4a8d

// initializeBoard: (boardSize: integer) -> Array
function initializeBoard(boardSize) {
  return [...Array(boardSize)].map(v => [...Array(boardSize)].map(v => false));
}

// copyBoard: (board: Array) -> Array
function copyBoard(board) {
  return board.map(column => column.slice());
}

// entireBoardVisited: (board: Array) -> boolean
function entireBoardVisited(board) {
  return board.every(column => column.every(square => square));
}

// possibleMoves: (x: integer, y: integer,
//                 board: Array, size: integer) -> Array
function possibleMoves(x, y, board, size) {
  const moves = [];

  const possibilities = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1]
  ];

  for (let [offsetX, offsetY] of possibilities) {
    const newX = x + offsetX;
    const newY = y + offsetY;
    if (newX < size && newX >= 0 &&
      newY < size && newY >= 0 &&
      !board[newX][newY]) {
      moves.push([newX, newY]);
    }
  }
  return moves;
}

// visitNextPosition: (x: integer, y: integer,
//                     board: Array, boardSize: integer)
//                     -> Array|boolean
function visitNextPosition(x, y, board, boardSize) {
  const copiedBoard = copyBoard(board);
  copiedBoard[x][y] = true;

  let moves = possibleMoves(x, y, copiedBoard, boardSize);
  if (moves.length === 0) {
    if (entireBoardVisited(copiedBoard)) return [
      [x, y]
    ];
    else return false;
  }

  moves = warnsdorff(moves, copiedBoard, boardSize);

  for (let [nextX, nextY] of moves) {
    let path = visitNextPosition(nextX, nextY, copiedBoard, boardSize);
    if (!!path) {
      path.push([x, y]);
      return path;
    }
  }
  return false;
}

// warnsdorff: (moves: Array, board: Array, size: integer) -> Array
function warnsdorff(moves, board, size) {
  const weightedMoves = [];
  for (const [x, y] of moves) {
    const weight = possibleMoves(x, y, board, size).length;
    weightedMoves.push({
      move: [x, y],
      weight
    });
  }
  return weightedMoves
    .sort((a, b) => a.weight - b.weight)
    .map(weighted => weighted.move);
}

// knightsTour(x: integer, y: integer,
//             boardSize: integer) -> Array|boolean
function knightsTour(start, boardSize) {
  const board = initializeBoard(boardSize);

  const [x, y] = start;
  try {
    return visitNextPosition(x, y, board, boardSize).reverse();
  } catch {
    return [];
  }
}


console.log(knightsTour([0, 0], 6));
