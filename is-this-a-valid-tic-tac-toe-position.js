function isValid(board) {
  const xCount = countMoves(board, 'X');
  const oCount = countMoves(board, 'O');

  if (!isValidMoveCount(xCount, oCount)) return false;

  return isValidWinState(hasWon(board, 'X'), hasWon(board, 'O'), xCount, oCount);
}

function countMoves(board, player) {
  return board.reduce((count, row) => count + row.split('').filter(cell => cell === player).length, 0);
}

function isValidMoveCount(xCount, oCount) {
  return xCount === oCount || xCount === oCount + 1;
}

function hasWon(board, player) {
  // Rows and columns
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true;
    if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true;
  }

  // Diagonals
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;

  return false;
}

function isValidWinState(xWins, oWins, xCount, oCount) {
  if (xWins && oWins) return false;
  if (xWins && xCount !== oCount + 1) return false;
  if (oWins && xCount !== oCount) return false;
  return true;
}


for (const [board, expected] of [
  [["XOX", "XOX", "OXO"], true],
  [["OOO", "XXX", "__X"], false],
  [["XXO", "OOX", "XOO"], false],
  [["XXX", "OOX", "OOX"], true]
])
  console.log(isValid(board) === expected);
