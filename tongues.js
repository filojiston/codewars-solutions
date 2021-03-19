// constant and global variables for our functions
const VOWELS = ['a', 'i', 'y', 'e', 'o', 'u'];
const CONSONANTS = ['b', 'k', 'x', 'z', 'n', 'h', 'd', 'c', 'w', 'g', 'p', 'v', 'j', 'q', 't', 's', 'r', 'l', 'm', 'f'];
const VOWEL_CYCLE = 3;
const CONSONANT_CYCLE = 10;

// gets the encoded string and decodes it
// character by character
function tongues(code) {
  let result = '';

  for (let i = 0; i < code.length; i++) {
    const current_letter = code[i];
    const decoded_letter = replace_letter(current_letter.toLowerCase());

    if (isUpperCase(current_letter)) {
      result += decoded_letter.toUpperCase();
    } else {
      result += decoded_letter;
    }
  }

  return result;
}

// we decode given letter in this function
function replace_letter(letter) {
  let vowel_index = VOWELS.indexOf(letter);
  if (vowel_index !== -1) {
    for (let i = 0; i < VOWEL_CYCLE; i++) {
      vowel_index++;
      if (vowel_index > VOWELS.length - 1) vowel_index = 0;
    }
    return VOWELS[vowel_index];
  }

  let consonant_index = CONSONANTS.indexOf(letter);
  if (consonant_index !== -1) {
    for (let i = 0; i < CONSONANT_CYCLE; i++) {
      consonant_index++;
      if (consonant_index > CONSONANTS.length - 1) consonant_index = 0;
    }
    return CONSONANTS[consonant_index];
  }

  return letter;
}

// for preserving original case
function isUpperCase(str) {
  return str != str.toLowerCase() && str == str.toUpperCase();
}

// i liked how he solved indexing problem by
// taking the number's modulus.
// i should've think of that.
// but i learned that! yaay!
// function tongues(code) {
//   var vowels = 'aiyeou';
//   var consonants = 'bkxznhdcwgpvjqtsrlmf';

//   var encode = function (ch) {
//     var isUpperCase = ch >= 'A' && ch <= 'Z';
//     var lowCh = ch.toLowerCase();
//     var result = ch;
//     if (vowels.indexOf(lowCh) >= 0) {
//       var newIndex = (vowels.indexOf(lowCh) + 3) % vowels.length;
//       result = vowels.charAt(newIndex);
//     }
//     if (consonants.indexOf(lowCh) >= 0) {
//       var newIndex = (consonants.indexOf(lowCh) + 10) % consonants.length;
//       result = consonants.charAt(newIndex);
//     }
//     return isUpperCase ? result.toUpperCase() : result;
//   }

//   return code.split('').map(encode).join('');

// }



console.log(tongues('Ita dotf ni dyca nsaw ecc.'), 'One ring to rule them all.');
console.log(tongues('Tim oh nsa nowa gid ecc fiir wat ni liwa ni nsa eor ig nsaod liytndu.'), 'Now is the time for all good men to come to the aid of their country.');
console.log(tongues('Giydhlida etr hakat uaedh efi iyd gidagensadh pdiyfsn ytni nsoh'), 'Fourscore and seven years ago our forefathers brought unto this');
console.log(tongues('litnotatn e tam tenoit.'), 'continent a new nation.');
console.log(tongues('Nsa zyolv pdimt gij xywbar ikad nsa cequ rifh.'), 'The quick brown fox jumped over the lazy dogs.');
console.log(tongues('Tywpadh (1234567890) etr bytlnyenoit, nsau hsiycr pins pa ytlsetfar!'), 'Numbers (1234567890) and punctuation, they should both be unchanged!');
console.log(tongues(' '), ' ');
console.log(tongues('Nsoh oh tin Vcotfit pyn on liycr pa e roggadatn gidaoft cetfyefa.'), 'This is not Klingon but it could be a different foreign language.');
console.log(tongues('0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789'), '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789');
console.log(tongues('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'), 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
console.log(tongues('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm'), 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
console.log(tongues('z'), 'q');
console.log(tongues('n'), 't');
console.log(tongues('****************************************************************************************************'), '****************************************************************************************************');
console.log(tongues('q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1'), 'z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1');
