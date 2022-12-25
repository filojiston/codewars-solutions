function formatNumber(number, template) {
  const numberLength = number.toString().length;
  const templateLength = (template.match(/#/g) || []).length;

  if (numberLength < templateLength) {
    return "Invalid phone number";
  }

  const numberArray = number.toString().split("").slice(0, templateLength);
  for (const number of numberArray) {
    template = template.replace("#", number);
  }

  return template;
}

console.log(formatNumber(79052479075, "+# ### ### ## ##"), "+7 905 247 90 75");
console.log(
  formatNumber(79052479075, "+# (###) ### ##-##"),
  "+7 (905) 247 90-75"
);
console.log(formatNumber(79052479075, "+# ### ### ## ##"), "+7 905 247 90 75");
console.log(
  formatNumber(81237068908090, "+## ### ### ## ##"),
  "+81 237 068 90 80"
);
console.log(
  formatNumber(8123706890, "+## ### ### ##-##"),
  "Invalid phone number"
);
console.log(formatNumber(112, "+ () -"), "+ () -");
