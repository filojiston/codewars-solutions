function arithmetic(a, b, operator){
  const operators = {
    "add": (a, b) => a + b,
    "subtract": (a, b) => a - b,
    "multiply": (a, b) => a * b,
    "divide": (a, b) => a / b
  }

  return operators[operator](a, b);
}

console.log(arithmetic(1, 2, "add"), 3);
console.log(arithmetic(8, 2, "subtract"), 6);
console.log(arithmetic(5, 2, "multiply"), 10);
console.log(arithmetic(8, 2, "divide"), 4);