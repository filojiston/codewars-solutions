function triangle(row) {

  if (row.length == 1) return row[0];

  const lookup = {
    "RR": "R",
    "BG": "R",
    "GB": "R",
    "BB": "B",
    "RG": "B",
    "GR": "B",
    "RB": "G",
    "BR": "G",
    "GG": "G"
  };

  let currentRow = row.split('');
  while (currentRow.length > 1) {
    let temp = '';
    for (let i = 0; i < currentRow.length - 1; i++) {
      let currentColor = lookup[currentRow[i] + currentRow[i + 1]];
      temp += currentColor;
    }
    currentRow = temp;
  }

  return currentRow;
}

console.log(triangle("GB"), "R");
console.log(triangle("RRR"), "R");
console.log(triangle("RGBG"), "B");
console.log(triangle("RBRGBRB"), "G");
console.log(triangle("RBRGBRBGGRRRBGBBBGG"), "G");
console.log(triangle("B"), "B");
