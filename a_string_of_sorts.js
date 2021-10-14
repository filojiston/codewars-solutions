function sortString(string, ordering) {
  ordering = Array.from(new Set(ordering.split(''))).join('');

  return string
    .split('')
    .sort((a, b) => {
      if (ordering.indexOf(a) != -1 && ordering.indexOf(b) != -1) {
        return ordering.indexOf(a) - ordering.indexOf(b);
      }
      return ordering.indexOf(b) - ordering.indexOf(a);
    })
    .join('');
}

console.log(sortString('foos', 'of'), 'oofs');
console.log(sortString('string', 'gnirts'), 'gnirts');
console.log(sortString('banana', 'abn'), 'aaabnn');
