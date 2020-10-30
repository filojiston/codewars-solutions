function parse(data) {
  const output = [];
  let initialValue = 0;

  data.split('').forEach(command => {
    switch (command) {
      case 'i':
        initialValue++;
        break;
      case 'd':
        initialValue--;
        break;
      case 's':
        initialValue *= initialValue;
        break;
      case 'o':
        output.push(initialValue);
        break;
      default:
        break;
    }
  });

  return output;
}

function parse(data) {
  let initialValue = 0; 
  
  return data.split('').reduce((acc, curr) => {
    switch (curr) {
      case 'i':
        initialValue++;
        break;
      case 'd':
        initialValue--;
        break;
      case 's':
        initialValue *= initialValue;
        break;
      case 'o':
        acc.push(initialValue);
        break;
      default:
        break;
    }
    return acc;
  }, []);
}

function parse(data) {
  let initialValue = 0; 
  
  return data.split('').reduce((acc, curr) => {
    switch (curr) {
      case 'i':
        initialValue++; break;
      case 'd':
        initialValue--; break;
      case 's':
        initialValue *= initialValue; break;
      case 'o':
        acc.push(initialValue); break;
    }
    return acc;
  }, []);
}


console.log(parse("iiisdoso"), [8, 64]);
console.log(parse("iiisxxxdoso"), [8, 64]);