Object.prototype.hash = function(path) {
    const [...parsed] = path.split('.');

    let obj = this;
    for (const property of parsed) {
        if (!obj.hasOwnProperty(property))  return undefined;

        obj = obj[property];
    }

    return obj;
}

// good and compact solution, uses reduce to iterate over the path
Object.prototype.hash = function(string) {
  return string.split('.').reduce((result = this, item) => result = result[item], this);
}

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

console.log(obj.hash('person.name'), 'joe');
console.log(obj.hash('person.game.home'), undefined);
