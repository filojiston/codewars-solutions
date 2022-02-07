function Automaton() {
  this.states = ['q1', 'q2', 'q3'];
}

Automaton.prototype.readCommands = function (commands) {
  let currentState = 'q1';

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    switch (currentState) {
      case 'q1':
        if (command == 0) {
          continue;
        } else {
          currentState = 'q2';
        }
        break;
      case 'q2':
        if (command == 0) {
          currentState = 'q3';
        } else {
          continue;
        }
        break;
      case 'q3':
        currentState = 'q2';
        break;
    }
  }
  return currentState == 'q2';
};

var myAutomaton = new Automaton();

console.log(myAutomaton.readCommands(['1']), true);
console.log(myAutomaton.readCommands(['1', '0', '0', '1']), true);
