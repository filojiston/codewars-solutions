function alphabetized(s) {
  s = s.replace(/[^a-zA-Z]/g, '').split('').map((ch, idx) => {
    return {
      char: ch,
      idx: idx
    };
  });

  return s.sort((a, b) => {
    if (a.char.toLowerCase() < b.char.toLowerCase()) {
      return -1;
    } else if (a.char.toLowerCase() > b.char.toLowerCase()) {
      return 1;
    } else {
      return a.idx - b.idx;
    }
  }).map(obj => obj.char).join('');

}


console.log(alphabetized('The Holy Bible'), 'BbeehHilloTy');
