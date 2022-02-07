function keysAndValues(data){
  return [Object.keys(data), Object.values(data)];
}


console.log(keysAndValues({ d: 4, e: 5, f: 6, g: 7 }));