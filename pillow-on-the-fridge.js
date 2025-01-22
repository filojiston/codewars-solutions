function pillow(s) {
  const n_indexes = [];
  for (let i = 0; i < s[0].length; i++) {
    if (s[0][i] === "n") {
      n_indexes.push(i);
    }
  }

  for (const idx of n_indexes) {
    if (s[1][idx] === "B") {
      return true;
    }
  }
  return false;
}

// nice
function pillow([a, b]) {
  return [...a].some((n, i) => n === "n" && b[i] === "B");
}

console.log(pillow(["EvH/KNikBiyxfeyK/miCMj", "I/HwjnHlFLlahMOKNadps"]), false);
console.log(
  pillow(["\\DjQ\\[zv]SpG]Z/[Qm\\eLL", "amwZArsaGRmibriXBgTRZp"]),
  false
);
console.log(pillow(["n", "B"]), true);
