// normal cell -> lowercase letter
// important cell -> uppercase letter, cannot cut out
// initial cancer cell -> lowercase c
// advanced cancer cell -> uppercase C

function cutCancerCells(organism) {
  let result = "";
  const cells = organism.split("");
  for (let i = 0; i < cells.length; i++) {
    const currentCell = cells[i];

    // if cell is important, add it to the result
    if (isImportantCell(currentCell) && !isCancerCell(currentCell)) {
      result += currentCell;
    } else if (!isImportantCell(currentCell) && isCancerCell(currentCell)) {
      // if it's lesser cancer cell, continue
      continue;
    } else if (isImportantCell(currentCell) && isCancerCell(currentCell)) {
      const cellBefore = cells[i - 1] || "";
      const cellAfter = cells[i + 1] || "";
      if (
        // we may added the cell before, so we need to remove it from result if it's adjacent to advanced cancer cell
        !isImportantCell(cellBefore) &&
        cellBefore === result[result.length - 1]
      ) {
        result = result.slice(0, -1);
      }
      if (!isImportantCell(cellAfter)) {
        // if it's normal cell, increment i so we don't add it to result
        i++;
      }
    } else {
      result += currentCell;
    }
  }

  return result;
}

function isImportantCell(cell) {
  return cell && cell === cell.toUpperCase();
}

function isCancerCell(cell) {
  return cell === "c" || cell === "C";
}

// regex, of course :)
function cutCancerCells(organism) {
  return organism.replace(/c|[a-z]?C[a-z]?/g, "");
}

// good solution, it's like mine but cleaner
function cutCancerCells(organism) {
  let organismArray = organism.split("");

  organismArray = organismArray.map((el, i) => {
    if (el.toLowerCase() === "c") return "";
    if (el === el.toLowerCase()) {
      return organismArray[i - 1] === "C" || organismArray[i + 1] === "C"
        ? ""
        : el;
    } else {
      return el;
    }
  });

  return organismArray.join("");
}

console.log(cutCancerCells("CC"), "");
console.log(cutCancerCells("CAAC"), "AA");
console.log(cutCancerCells("CaaC"), "");
console.log(cutCancerCells("C"), "");
console.log(cutCancerCells("acb"), "ab");
console.log(cutCancerCells("aCb"), "");
console.log(cutCancerCells("acCb"), "a");
console.log(cutCancerCells("acCcb"), "ab");
console.log(cutCancerCells("ab"), "ab");
console.log(cutCancerCells("aCZ"), "Z");
console.log(cutCancerCells("BCE"), "BE");
console.log(cutCancerCells("nce"), "ne");
console.log(cutCancerCells("NcE"), "NE");
console.log(
  cutCancerCells("xFvakcckNKcKCCaCCFjCWXETcCpiqhCOcXK"),
  "xFvakkNKKFWXETiqOXK"
);
