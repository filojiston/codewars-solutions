function isMerge(s, part1, part2, buildedStr='') {
  // base case
  if (part1.length + part2.length !== s.length) return false;
  if (part1.length === 0 && part2.length === 0) return true;

  // backtrack
  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i];
    if (currentLetter === part1[0]) {
      buildedStr += part1[0];
      if (isMerge(s.substring(1, s.length), part1.substring(1, part1.length), part2, buildedStr))
        return true;
      else
        buildedStr = buildedStr.slice(0, -1);
    } if (currentLetter === part2[0]) {
      buildedStr += part2[0];
      if (isMerge(s.substring(1, s.length), part1, part2.substring(1, part2.length), buildedStr))
        return true;
      else
        buildedStr = buildedStr.slice(0, -1);
    }

    return false;
  }

  return false;
}

// lol
function isMerge(s, part1, part2) {
  return !s ? !(part1 || part2) :
    s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
    s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}

// it's like my solution but cleaner
function isMerge(s, part1, part2) {
  if (s === "" && part1 === "" && part2 === "") return true;

  if (s !== "") {
    if (s[0] === part1[0] && part1[0] === part2[0]) {
      // we make two branches of an recursion and get OR of the answers
      return (isMerge(s.slice(1), part1.slice(1), part2) || isMerge(s.slice(1), part1, part2.slice(1)));
    } else if (s[0] === part1[0]) {
      return isMerge(s.slice(1), part1.slice(1), part2);
    } else if (s[0] === part2[0]) {
      return isMerge(s.slice(1), part1, part2.slice(1));
    }
  }

  return false;
}


console.log(isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am'));
console.log(isMerge('codewars', 'cdw', 'oears'));
console.log(!isMerge('codewars', 'cod', 'wars'));
