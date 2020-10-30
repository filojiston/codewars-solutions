function greet(name, owner) {
  return name.localeCompare(owner) === 0 ? 'Hello boss' : 'Hello guest';
}

console.log(greet("Daniel", "Daniel"), "Hello boss");
console.log(greet("Greg", "Daniel"), "Hello guest");
