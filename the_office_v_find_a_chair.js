function meeting(x, need) {
  if (need == 0) return 'Game On';

  let totalChairs = 0;
  const neededChairs = x.reduce((acc, curr) => {
    const occupants = (curr[0].match(/X/g) || []).length;
    let chairs = curr[1];
    let currentChairs = 0;

    while (chairs > occupants && totalChairs < need) {
      totalChairs++;
      currentChairs++;
      chairs--;
    }
    acc.push(currentChairs);
    return acc;
  }, []);

  if (totalChairs < need) return 'Not enough!';

  while (neededChairs[neededChairs.length - 1] === 0) {
    neededChairs.pop();
  }

  return neededChairs;
}

console.log(
  meeting(
    [
      ['XXX', 3],
      ['XXXXX', 6],
      ['XXXXXX', 9],
    ],
    4
  ),
  [0, 1, 3]
);
console.log(
  meeting(
    [
      ['XXX', 1],
      ['XXXXXX', 6],
      ['X', 2],
      ['XXXXXX', 8],
      ['X', 3],
      ['XXX', 1],
    ],
    5
  ),
  [0, 0, 1, 2, 2]
);
console.log(
  meeting(
    [
      ['XX', 2],
      ['XXXX', 6],
      ['XXXXX', 4],
    ],
    0
  ),
  'Game On'
);
