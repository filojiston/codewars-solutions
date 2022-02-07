function alphanumeric(string) {
  return new RegExp(/^[a-zA-Z0-9]{1,}$/).test(string.trim());
}


console.log(alphanumeric("Mazinkaiser"), true);
console.log(alphanumeric("hello world_"), false);
console.log(alphanumeric("PassW0rd"), true);
console.log(alphanumeric("     "), false);