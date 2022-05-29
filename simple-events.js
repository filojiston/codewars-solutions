class Event {
  constructor() {
    this.handlers = [];
  }

  subscribe(fn) {
    this.handlers.push(fn);
  }

  unsubscribe(fn) {
    this.handlers = this.handlers.filter((item) => item !== fn);
  }

  emit(...args) {
    this.handlers.forEach((item) => item(...args));
  }
}

const ev = new Event();
function f() {
  f.calls = (f.calls || 0) + 1;
  f.args = Array.prototype.slice.call(arguments);
}

ev.subscribe(f);
ev.emit(1, 2, 3);
