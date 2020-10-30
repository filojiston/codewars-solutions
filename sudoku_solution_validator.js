function validSolution(board){
  // check for rows
  board.forEach(seq => {
    if (!isValid(seq))  return false;
  });

  // check for columns
  let currSeq = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      currSeq.push(board[j][i]);
    }
    if (!isValid(currSeq))  return false;
    currSeq = [];
  }

  // congratulations for reaching here! now, all i have to do for beating you is
  // checking your first diagonal
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      currSeq.push(board[i][j]);
    }
  }

  return isValid(currSeq);
}

function isValid(seq) {
  const trueForm = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const formedArray = Array.from(new Set(seq)).sort();
  return trueForm.every((val, index) => val == formedArray[index]);
}

console.log(isValid([2,3,5,6,7,9,8,4,1]))


console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]]), true);
  
console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
   [6, 7, 2, 1, 9, 0, 3, 4, 8],
   [1, 0, 0, 3, 4, 2, 5, 6, 0],
   [8, 5, 9, 7, 6, 1, 0, 2, 0],
   [4, 2, 6, 8, 5, 3, 7, 9, 1],
   [7, 1, 3, 9, 2, 4, 8, 5, 6],
   [9, 0, 1, 5, 3, 7, 2, 1, 4],
   [2, 8, 7, 4, 1, 9, 6, 3, 5],
   [3, 0, 0, 4, 8, 1, 1, 7, 9]]), false);

console.log(validSolution([[1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]]), false);