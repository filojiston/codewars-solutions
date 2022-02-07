function markSpot(n) {
  if (!Number.parseInt(n) || n % 2 == 0 || n < 0) return "?";

  const result = [];

  const mid = Math.floor(n / 2);

  let currentSpacesAtBeginning = 0;
  let currentSpacesAtMiddle = n * 2 - 3;
  let currentLine = "";

  for (let i = 0; i < n; i++) {
    console.log(currentSpacesAtMiddle);
    console.log(currentSpacesAtBeginning);
    for (let j = 0; j < currentSpacesAtBeginning; j++) currentLine += " ";
    currentLine += "X";
    for (let k = 0; k < currentSpacesAtMiddle; k++) currentLine += " ";
    if (i != mid) currentLine += "X";
    if (i < mid) {
      currentSpacesAtBeginning += 2;
      currentSpacesAtMiddle -= 4;
    } else {
      currentSpacesAtBeginning -= 2;
      currentSpacesAtMiddle += 4;
    }

    result.push(currentLine);
    currentLine = "";
  }

  return result.join("\n") + "\n";
}

// wow nice solution
function markSpot(n) {
  if (!+n || n < 1 || !(n & 1)) return "?";
  const arr = Array(n)
    .fill()
    .map((_) => Array(2 * n - 1).fill(" "));
  let l = 0,
    r = 2 * n - 2;
  for (let i = 0; i < n; i++)
    (arr[i][l] = "X"), (arr[i][r] = "X"), (l += 2), (r -= 2);
  return arr.map((v) => v.join``.replace(/ +$/, "")).join`\n` + "\n";
}

console.log(markSpot(5), "\n\nX       X\n  X   X\n    X\n  X   X\nX       X\n");
console.log(markSpot(1), "\n\nX\n");
console.log(
  markSpot(11),
  "\n\nX                   X\n  X               X\n    X           X\n      X       X\n        X   X\n          X\n        X   X\n      X       X\n    X           X\n  X               X\nX                   X\n"
);
console.log(markSpot("treasure"), "?");
