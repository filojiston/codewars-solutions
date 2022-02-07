function uniqueInOrder(iterable) {
  if (iterable.length === 0)  return [];
  if (iterable.length < 2)  return [iterable[0]];


  const result = [iterable[0]];
  
  for (let i = 1; i < iterable.length; i++) {
    let elemToCompare = result[result.length - 1];
    let currElem = iterable[i];

    if (elemToCompare !== currElem) {
      result.push(currElem);
    }
  }

  return result;
}



console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B']);