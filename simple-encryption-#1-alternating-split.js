function encrypt(text, n) {
  if (!text || n <= 0)  return text;

  let result = '';
  let firstPart = '';
  let secondPart = '';
  
  for (let i = 0; i < text.length; i++) {
    if (i % 2 == 0) {
      secondPart += text[i];
    } else {
      firstPart += text[i];
    }
  }

  result = firstPart + secondPart;
  return encrypt(result, n - 1);
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0)  return encryptedText;
  const half = Math.floor(encryptedText.length / 2)
  const firstHalf = encryptedText.substring(0, half);
  const secondHalf = encryptedText.substring(half);
  
  let result = '';

  for (let i = 0; i <= half; i++) {
    result += secondHalf[i] || '';
    result += firstHalf[i] || '';
  }

  return decrypt(result, n - 1);
}


console.log(encrypt("This is a test!", 0), "This is a test!");
console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2), "s eT ashi tist!");
console.log(encrypt("This is a test!", 3), " Tah itse sits!");
console.log(encrypt("This is a test!", 4), "This is a test!");
console.log(encrypt("This is a test!", -1), "This is a test!");
console.log(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");

console.log(decrypt("This is a test!", 0), "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
console.log(decrypt("This is a test!", 4), "This is a test!");
console.log(decrypt("This is a test!", -1), "This is a test!");
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");

console.log(encrypt("", 0), "");
console.log(decrypt("", 0), "");
console.log(encrypt(null, 0), null);
console.log(decrypt(null, 0), null);