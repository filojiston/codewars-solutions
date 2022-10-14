const xMarksTheSpot = (input) => {
    let found = false;
    let coords = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === 'x') {
                if (found)  return [];
                found = true;
                coords = [i, j];
            }
        }
    }

    return coords;
}

console.log(xMarksTheSpot(['o', 'o']));
console.log(xMarksTheSpot(['x', 'o']));
console.log(xMarksTheSpot(['x', 'x']));
