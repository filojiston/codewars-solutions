function stringTask(s) {
  return '.' + s.toLowerCase()
    .split('')
    .filter(x => !"aoyuei".includes(x))
    .join('.');
}

function stringTask(s) {
  return [].reduce.call(s.toLowerCase(), (acc, curr) => {
    return "aeuioy".includes(curr) ? acc : acc + curr + '.';
  }, '.').slice(0, -1);
}

// nice solution with regex
function stringTask(s){
  return s.toLowerCase().replace(/[aeiouy]/g, '').replace(/./g, v=>'.'+v);
}

console.log(stringTask("aBAcAba"));

