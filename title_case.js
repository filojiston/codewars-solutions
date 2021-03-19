const makeTitle = (word) => word[0].toUpperCase() + word.substring(1).toLowerCase(); 


function titleCase(title, minorWords) {
  if (!title)  return '';
  // a place to store the result
  let result = [];
  // split title to words by space
  const words = title.split(' '); 
  // add first word to result in title case
  result.push(makeTitle(words[0]));
  if (!minorWords) {
    minorWords = [];
  } else {
    minorWords = minorWords.split(' ').map(word => word.toLowerCase());
  }
  // iterate over the words - start from index 1
  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i].toLowerCase();
    // check if the word in minorWords
    if (minorWords.includes(currentWord)) {
      // append the word as it is
      result.push(currentWord);
    // else
    } else {
      // append the word in title case
      result.push(makeTitle(currentWord));
    }
  }
  
  return result.join(' ');
}

function titleCase(title, minorWords) {
  if (!title) return '';
  minorWords = minorWords ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').reduce((acc, curr, index) => {
    if (index == 0) {
      acc.push(makeTitle(curr));
    } else {
      if (minorWords.includes(curr)) {
        acc.push(curr);
      } else {
        acc.push(makeTitle(curr));
      }
    }
    return acc;
  }, []).join(' ');
}

console.log(titleCase(''), '')
console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox')
