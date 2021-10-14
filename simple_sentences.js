function makeSentence(parts) {
  let merged = parts.join(' ');
  console.log(merged)
  merged = merged.replace(/ ,/g, ',');
  merged = merged.replace(/ \.+/g, '');
  merged += '.';
  return merged;
}


// console.log(makeSentence(['hello', 'world']), 'hello world.');
// console.log(makeSentence(['hello', ',', 'my', 'dear'], 'hello, my dear.'));
console.log(makeSentence(['hello', 'world', '.', '.', '.'], 'hello, my dear.'));
