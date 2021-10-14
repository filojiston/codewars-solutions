var CaesarCipher = function (shift) {
  this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  this.shift = shift;
  this.encode = function (decodedString) {
    decodedString = decodedString.toUpperCase();
    return decodedString
      .split('')
      .map((letter) => {
        const idx = this.letters.indexOf(letter);
        return idx !== -1
          ? this.letters[(idx + this.shift) % this.letters.length]
          : letter;
      })
      .join('');
  };

  this.decode = function (encodedString) {
    return encodedString
      .split('')
      .map((letter) => {
        const idx = this.letters.indexOf(letter);
        return idx !== -1
          ? this.letters[
              (idx + this.letters.length - this.shift) % this.letters.length
            ]
          : letter;
      })
      .join('');
  };
};

// nice and compact solution with regex
var CaesarCipher = function (shift) {
  var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  this.encode = function (str) {
    return str.replace(/[a-z]/gi, function (s) {
      return a[(a.indexOf(s.toUpperCase()) + shift) % 26];
    });
  };
  this.decode = function (str) {
    return str.replace(/[a-z]/gi, function (s) {
      return a[(a.indexOf(s.toUpperCase()) + 26 - shift) % 26];
    });
  };
};

var c = new CaesarCipher(5);
console.log(c.encode('Codewars'));
console.log(c.decode('BFKKQJX'));
