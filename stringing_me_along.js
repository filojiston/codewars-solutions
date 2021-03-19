// const createMessage = (msg) => m => m ? createMessage(msg + ' ' + m) : msg;

function createMessage(message) {
  return function x(m) {
    if (m) return createMessage(message + ' ' + m);
    else return message;
  }
}

console.log(createMessage("Hello")("World!")("how")("are")("you?")(), "Hello World! how are you?");
