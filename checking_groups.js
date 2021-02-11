const LOOKUP = {
  '[': ']',
  '{': '}',
  '(': ')',
}

function groupCheck(braces) {
  const stack = [];
  let currentChar;

  for (let i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (LOOKUP[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== LOOKUP[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}


console.log(groupCheck(")(}{]["), "That group was matched correctly");
console.log(!groupCheck("{(})"), "That group was matched incorrectly");
console.log(!groupCheck("[])"), "That group was left open or prematurely closed");
