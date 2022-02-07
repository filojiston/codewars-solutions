function validPhoneNumber(phoneNumber) {
  return new RegExp(/^\([0-9]{3}\) [0-9]{3}[-][0-9]{4}$).test(phoneNumber);
}

console.log(validPhoneNumber("(123) 456-7890"), true);
