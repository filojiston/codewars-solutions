const LETTERS = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                  'u', 'v', 'w', 'x', 'y', 'z' ];

const VOWELS = [ 'a', 'e', 'i', 'o', 'u' ];

function vowelBack(s) {
    return s.split('').map(letter => findCorrespondingLetter(letter)).join('');
}

function findCorrespondingLetter(letter) {
    let index = LETTERS.indexOf(letter);
    let originalIndex = index;

    // check for exceptions
    if (letter == 'c' || letter == 'o') {
        index = movePtr(index, 0);
    } else if (letter == 'd') {
        for (let i = 0; i < 3; i++) index = movePtr(index, 0);
    } else if (letter == 'e') {
        for (let i = 0; i < 4; i++) index = movePtr(index, 0);
    } else {
        if (VOWELS.includes(letter)) {
            for (let i = 0; i < 5; i++) index = movePtr(index, 0);
        } else {
            for (let i = 0; i < 9; i++) index = movePtr(index, 1);
        }
    }

    if ('code'.includes(LETTERS[index])) {
        index = originalIndex;
    }

    return LETTERS[index];
}

function movePtr(idx, direction) {
    if (direction) {
        idx++;
        if (idx > LETTERS.length - 1)   idx = 0;
    } else {
        idx--;
        if (idx < 0)    idx = LETTERS.length - 1;
    }

    return idx;
}

console.log(vowelBack("testcase"), "tabtbvba");
console.log(vowelBack("codewars"), "bnaafvab");
console.log(vowelBack("exampletesthere"), "agvvyuatabtqaaa");
