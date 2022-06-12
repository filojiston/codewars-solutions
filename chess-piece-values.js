const hash = {
  queen: 9,
  rook: 5,
  bishop: 3,
  knight: 3,
  pawn: 1,
};

function piecesValue(arr, s) {
  return arr.reduce((acc, curr) => {
    const rowValue = curr
      .map((piece) => getValueOfGivenPiece(piece, s))
      .reduce((a, b) => a + b);
    return acc + rowValue;
  }, 0);
}

function getValueOfGivenPiece(piece, color) {
  if (
    (color === "white" && piece.startsWith("w-")) ||
    (color === "black" && piece.startsWith("b-"))
  ) {
    return hash[piece.slice(2)] || 0;
  }

  return 0;
}

var r1 = [
  ["b-bishop", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", "b-queen", " ", " ", " ", " ", "w-queen"],
  [" ", "b-king", " ", "b-pawn", "w-rook", " ", " ", " "],
  [" ", " ", " ", " ", "w-pawn", " ", " ", " "],
  [" ", " ", " ", " ", " ", "w-bishop", " ", " "],
  ["w-king", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", "b-pawn", "b-pawn", " ", " ", " ", " "],
];

console.log(piecesValue(r1, "white"), 18);
console.log(piecesValue(r1, "black"), 15);
