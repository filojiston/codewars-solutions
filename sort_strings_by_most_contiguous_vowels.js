function sortStringsByVowels(strings) {
  return strings.sort(
    (a, b) => continiousVowelCount(b) - continiousVowelCount(a)
  );
}

function continiousVowelCount(string) {
  string = string.toLowerCase();
  string = string.replace(/[^aeiou]/g, '.');
  string = string.replace(/\.+/g, '.');
  return Math.max(...string.split('.').map((x) => x.length));
}

// this is much better but i couldn't think of it at first
function continiousVowelCount(string) {
  return Math.max(...(string.match(/[aeiou]+/gi) || []).map((x) => x.length));
}

console.log(sortStringsByVowels(['aa', 'eee', 'oo', 'iiii']), [
  'iiii',
  'eee',
  'aa',
  'oo',
]);
console.log(sortStringsByVowels(['a', 'e', 'ii', 'ooo', 'u']), [
  'ooo',
  'ii',
  'a',
  'e',
  'u',
]);
console.log(sortStringsByVowels(['ioue', 'ee', 'uoiea']), [
  'uoiea',
  'ioue',
  'ee',
]);
console.log(sortStringsByVowels(['high', 'day', 'boot']), [
  'boot',
  'high',
  'day',
]);
console.log(sortStringsByVowels(['none', 'uuu', 'Yuuuge!!']), [
  'uuu',
  'Yuuuge!!',
  'none',
]);
console.log(sortStringsByVowels(['AIBRH', '', 'YOUNG', 'GREEEN']), [
  'GREEEN',
  'AIBRH',
  'YOUNG',
  '',
]);
console.log(sortStringsByVowels(['jyn', 'joan', 'jimmy', 'joey']), [
  'joan',
  'joey',
  'jimmy',
  'jyn',
]);
console.log(sortStringsByVowels(['uijijeoj', 'lkjlkjww2', 'iiutrqy']), [
  'iiutrqy',
  'uijijeoj',
  'lkjlkjww2',
]);
console.log(sortStringsByVowels(['how about now', 'a beautiful trio of']), [
  'a beautiful trio of',
  'how about now',
]);
console.log(sortStringsByVowels(['every', 'bataux', 'is', 'waaaay', 'loose']), [
  'waaaay',
  'bataux',
  'loose',
  'every',
  'is',
]);
