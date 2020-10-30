function firstDup (s) {
  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i];
    if (s.indexOf(currentLetter) !== s.lastIndexOf(currentLetter))  return currentLetter;
  }

  return undefined;
}

console.log(firstDup('tweet'), 't');
console.log(firstDup('Ode to Joy'), ' ');
console.log(firstDup('ode to joy'), 'o');
console.log(firstDup('bar'), undefined);
console.log(firstDup('123123'), '1');
console.log(firstDup('!@#$!@#$'), '!');