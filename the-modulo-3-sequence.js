// TIL matrix exponention method can be used for solving linear recursion problems. nice!
function matrixMultiply(A, B, mod) {
  const result = [
    [0, 0],
    [0, 0],
  ];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        result[i][j] = (result[i][j] + A[i][k] * B[k][j]) % mod;
      }
    }
  }
  return result;
}

function matrixPower(matrix, exponent, mod) {
  if (exponent === 1) {
    return matrix;
  }
  if (exponent % 2 === 0) {
    const halfPower = matrixPower(matrix, exponent / 2, mod);
    return matrixMultiply(halfPower, halfPower, mod);
  } else {
    const halfPower = matrixPower(matrix, (exponent - 1) / 2, mod);
    return matrixMultiply(
      matrixMultiply(halfPower, halfPower, mod),
      matrix,
      mod
    );
  }
}

function sequence(n) {
  if (n === 1 || n === 2) {
    return n - 1;
  }

  const transitionMatrix = [
    [0, 1],
    [1, 1],
  ];
  const resultMatrix = matrixPower(transitionMatrix, n - 2, 3);
  return resultMatrix[1][1];
}

// woaw!
function sequence(n) {
  return [1, 0, 1, 1, 2, 0, 2, 2][n % 8];
}

console.log(sequence(20), 2);
console.log(sequence(8), 1);
console.log(sequence(41), 0);
console.log(sequence(48), 1);
console.log(sequence(148), 2);
console.log(sequence(163), 1);
console.log(sequence(111), 2);
console.log(sequence(51013947783), 2);
