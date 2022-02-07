function searchSubstr(fullText, searchText, allowOverlap = true) {
  // if searchText is empty, return 0
  if (searchText.length === 0) {
    return 0;
  }

  let count = 0;
  let match;
  const re = new RegExp(`(${searchText})`, 'g');
  if (allowOverlap) {
    while ((match = re.exec(fullText))) {
      re.lastIndex = match.index + 1;
      count++;
    }
  } else {
    while ((match = re.exec(fullText))) {
      count++;
    }
  }

  return count;
}

console.log(searchSubstr('aa_bb_cc_dd_bb_e', 'bb'), 2);
console.log(searchSubstr('aaabbbcccc', 'bbb'), 1);
console.log(searchSubstr('aaa', 'aa'), 2);
console.log(searchSubstr('aaa', ''), 0);
console.log(searchSubstr('aaa', 'aa', false), 1);
