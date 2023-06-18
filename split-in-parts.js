function splitInParts(s, n) {
  return s.split('').reduce((acc, curr, idx) => {
    const chunkIdx = Math.floor(idx / n);
    if (!acc[chunkIdx]) {
      acc[chunkIdx] = '';
    }
    acc[chunkIdx] += curr;
    return acc;
  }, []).join(' ');
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s");
console.log(splitInParts("HelloKata", 1), "H e l l o K a t a");
console.log(splitInParts("HelloKata", 9), "HelloKata");
