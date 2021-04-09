class Robot {
  constructor() {
    this.learnedWords = ['thank', 'you', 'for', 'teaching',
      'me', 'i', 'already', 'know', 'understand'];
  }

  learnWord(word) {
    console.log(word);
    if (!this.isValid(word.toLowerCase())) return "I do not understand the input";
    if (this.learnedWords.includes(word.toLowerCase())) return `I already know the word ${word}`;
    this.learnedWords.push(word.toLowerCase());
    return `Thank you for teaching me ${word}`;
  }
  isValid(word) {
    return word.match(/^[a-z]+$/g) !== null;
  }
}

// small and nice solution. I did not noticed the trick. wow! ;)
// function Robot() {
//   let store = 'I do not understand the input already know word Thank you for teaching me'.toLowerCase().split(' ');
//   this.learnWord = word => {
//     if (!word || /[^a-z]/i.test(word)) return 'I do not understand the input';
//     return ~store.indexOf(word.toLowerCase()) ? `I already know the word ${word}` : (store.push(word.toLowerCase()), `Thank you for teaching me ${word}`);
//   }
// }


const vicky = new Robot();
console.log(vicky.learnWord('hello'), 'Thank you for teaching me hello');
console.log(vicky.learnWord('world'), 'Thank you for teaching me world');
console.log(vicky.learnWord('goodbye'), 'Thank you for teaching me goodbye');
console.log(vicky.learnWord('world'), 'I already know the word world');
console.log(vicky.learnWord('World'), 'I already know the word World');
