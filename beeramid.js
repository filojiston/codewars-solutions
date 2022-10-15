function beeramid(bonus, price) {
  let level = 0; // levels we successfully build
  let idx = 1;   // indexes of levels, we might not successfully build that level

  // check if we can build the level we're on.
  while (bonus >= (idx * idx) * price) {
    level++
    bonus -= (idx * idx) * price;
    idx++;
  }

  return level;
}

// ahha! of course, we are repeating same thing so why not use our dearest recursion?
const beeramid = (bonus, price, lvl = 1) =>
  bonus - lvl ** 2 * price < 0 ? --lvl : beeramid(bonus - lvl ** 2 * price, price, ++lvl);

console.log(beeramid(9, 2), 1);
console.log(beeramid(10, 2), 2);
console.log(beeramid(11, 2), 2);
console.log(beeramid(21, 1.5), 3);
console.log(beeramid(454, 5), 5);
console.log(beeramid(455, 5), 6);
console.log(beeramid(4, 4), 1);
console.log(beeramid(3, 4), 0);
console.log(beeramid(0, 4), 0);
console.log(beeramid(-1, 4), 0);
