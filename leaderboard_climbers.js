// doesnt work, because of object...

function leaderboardSort(leaderboard, changes) {
  // create an object and store changes in it, it'll be easier to sort the leaderboard
  const finalChanges = {};

  for (const change of changes) {
    let [name, num] = change.split(" ");
    num = parseInt(num);
    if (!finalChanges.hasOwnProperty(name)) {
      finalChanges[name] = num;
    } else {
      let currentNum = finalChanges[name];
      finalChanges[name] = currentNum + num;
    }
  }

  // sort the leaderboard by changes
  for (const [key, value] of Object.entries(finalChanges)) {
    const currentIndex = leaderboard.indexOf(key);
    leaderboard.splice(currentIndex, 1);
    leaderboard.splice(currentIndex - value, 0, key);
  }

  return leaderboard;
}

function leaderboardSort(leaderboard, changes) {
  // sort the leaderboard by changes
  for (const change of changes) {
    let [name, num] = change.split(' ');
    num = +num;
    const currentIndex = leaderboard.indexOf(name);
    leaderboard.splice(currentIndex, 1);
    leaderboard.splice(currentIndex - num, 0, name);
  }

  return leaderboard;
}


console.log(
  leaderboardSort(
    ["John", "Brian", "Jim", "Dave", "Fred"],
    ["Dave +1", "Fred +4", "Brian -1"]
  ),
  ["Fred", "John", "Dave", "Brian", "Jim"]
);
console.log(
  leaderboardSort(
    ["Bob", "Larry", "Kevin", "Jack", "Max"],
    ["Max +3", "Kevin -1", "Kevin +3"]
  ),
  ["Bob", "Kevin", "Max", "Larry", "Jack"]
);
