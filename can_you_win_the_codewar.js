function codewarResult(codewarrior, opponent) {
  codewarrior.sort((a, b) => a - b);

  let wins = 0;
  let winners = [];
  let tiers = [];

  for (let myArmy of codewarrior) {
    let winningAgainst = opponent.filter(army => army < myArmy);
    if (winningAgainst.length > 0) {
      wins++;
      opponent.splice(opponent.indexOf(Math.max(...winningAgainst)), 1);
      winners.push(myArmy);
    }
  }

  for (let winner of winners) {
    codewarrior.splice(codewarrior.indexOf(winner), 1);
  }

  for (let myArmy of codewarrior) {
    let tieAgainst = opponent.filter(army => army === myArmy);
    if (tieAgainst.length > 0) {
      opponent.splice(opponent.indexOf(Math.max(...tieAgainst)), 1);
      tiers.push(myArmy);
    }
  }

  for (let tier of tiers) {
    codewarrior.splice(codewarrior.indexOf(tier), 1);
  }

  wins -= opponent.length;
   
  return wins == 0 ? "Stalemate" : wins > 0 ? "Victory" : "Defeat";
}

console.log(codewarResult([1, 4, 1], [1, 5, 3]), "Stalemate");
console.log(codewarResult([2, 4, 3, 1], [4, 5, 1, 2]), "Victory");
console.log(codewarResult([1, 2, 2, 1], [3, 1, 2, 3]), "Defeat");
console.log(codewarResult([1, 1, 1, 1], [1, 1, 1, 1]), "Stalemate");
console.log(codewarResult([5], [6]), "Defeat");
console.log(codewarResult([2, 1, 3, 1, 1, 3, 3, 2, 3, 1, 1, 1, 3, 1, 3, 1, 3, 3, 1, 2, 3, 3, 1, 3],
   [4, 4, 1, 4, 3, 1, 4, 4, 3, 2, 1, 2, 1, 3, 3, 1, 4, 4, 3, 2, 3, 2, 4, 1]), "Stalemate");
console.log(codewarResult([2,3,8,4,3], [2,11,3,8,6]), "Victory");
console.log(codewarResult([1,2,2,2,4], [3,1,4,2,4]), "Stalemate");