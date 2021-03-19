function binaryToString(binary) {
    if (!binary)    return "";
    const binaryArr = binary.match(/.{8}/g);
    return binaryArr.map(binaryStr => {
        const intVal = Number.parseInt(binaryStr, 2);
        return String.fromCharCode(intVal);
    }).join('');
}

// nice solution, i wish i know about [01] part in the regex.
// i guess i have a lot to learn about regex :( sadge
// function binaryToString(binary) {
//   return binary.replace(/[01]{8}/g, n => String.fromCharCode(parseInt(n, 2)))
// }

console.log(binaryToString('01100001'), 'a');
console.log(binaryToString('01001011010101000100100001011000010000100101100101000101'), 'KTHXBYE');
console.log(binaryToString('00110001001100000011000100110001'), '1011');
console.log(binaryToString('001111000011101000101001'), '<:)');
