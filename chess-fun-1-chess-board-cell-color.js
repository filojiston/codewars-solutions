// function chessBoardCellColor(cell1, cell2) {
//   const first = cell1.split('');
//   const second = cell2.split('');

//   const f = "ACEG".includes(first[0]);
//   const s = "ACEG".includes(second[0]);

//   const f2 = +first[1];
//   const s2 = +second[1];

//   // f-s -> siyahla mı basliyor
//   // 1 se ciftte 0

//   console.log((f && (f2 & 1) || (!f && !(f2 & 1))));
//   console.log((s && (s2 & 1)) || (!s && !(s2 & 1)));

//   return Boolean((f && (f2 & 1) || (!f && !(f2 & 1))) ==
//     ((s && (s2 & 1)) || (!s && !(s2 & 1))));
// }

const chessBoardCellColor = (cell1, cell2) => Boolean(("ACEG".includes(cell1.split('')[0]) && (cell1.split('')[1] & 1) || (!"ACEG".includes(cell1.split('')[0]) && !(cell1.split('')[1] & 1))) == (("ACEG".includes(cell2.split('')[0]) && (cell2.split('')[1] & 1)) || (!"ACEG".includes(cell2.split('')[0]) && !(cell2.split('')[1] & 1))));


console.log(chessBoardCellColor("F5", "B2"), false);
console.log(chessBoardCellColor("A1", "H3"), false);
console.log(chessBoardCellColor("A1", "A2"), false);
console.log(chessBoardCellColor("F1", "F3"), true);
console.log(chessBoardCellColor("D6", "G2"), false);

