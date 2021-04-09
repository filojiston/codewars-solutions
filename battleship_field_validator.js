const MAX_FIELD_SIZE = 10;

function validateBattlefield(field) {
  const ships = ["-", 4, 3, 2, 1];

  let currentCount = 0;
  let originalI = 0;

  for (let i = 0; i < MAX_FIELD_SIZE; i++) {
    for (let j = 0; j < MAX_FIELD_SIZE; j++) {
      if (field[i][j] == 1) {
        // first, we must detect if it's horizontal or vertical, or a submarine
        // horizontal
        if (field[i][j + 1] == 1) {
          // while ship continues
          while (field[i][j] == 1) {
            if (checkDiagonal(field, i, j)) return false;
            if (field[i + 1][j] == 1) return false; // contacts with other ship
            currentCount++;
            field[i][j] = 0;
            j++;
          }
        } else if (field[i + 1][j] == 1) {
          // vertical, we need to reset i to the original location after calculations
          originalI = i;
          // while ship continues
          while (field[i][j] == 1) {
            if (checkDiagonal(field, i, j)) return false;
            if (field[i][j + 1] == 1) return false; // contacts with other ship
            currentCount++;
            field[i][j] = 0;
            i++;
          }
          i = originalI;
        } else {
          // then it's a submarine
          currentCount++;
          field[i][j] = 0;
        }
        ships[currentCount]--;
        currentCount = 0;
      }
    }
  }

  ships.shift();

  return ships.every((x) => x == 0);
}

function isValidLocation(i, j) {
  return i >= 0 && i < MAX_FIELD_SIZE && j >= 0 && j < MAX_FIELD_SIZE;
}

function checkDiagonal(field, currI, currJ) {
  // check upper left
  if (isValidLocation(currI - 1, currJ - 1) && field[currI - 1][currJ - 1] == 1)
    return true;

  // check upper right
  if (isValidLocation(currI - 1, currJ + 1) && field[currI - 1][currJ + 1] == 1)
    return true;

  // check lower left
  if (isValidLocation(currI + 1, currJ - 1) && field[currI + 1][currJ - 1] == 1)
    return true;

  // check lower right
  if (isValidLocation(currI + 1, currJ + 1) && field[currI + 1][currJ + 1] == 1)
    return true;

  return false;
}

console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);
console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);
