operator_lookup = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
}

class Calculator {

  // ah, they disable the use of eval
  // evaluate(str) {
  //   return eval(str);
  // }

  calculate(num1, operator, num2) {
    return operator_lookup[operator](num1, num2);
  }

  evaluate(str) {
    str = str.split(' ').map(x => parseInt(x) || x);
    const result_of_mult_or_div = [];

    // first, do multiplication or divisions, if any
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        result_of_mult_or_div.push(str[i]);
      } else {
        if (str[i] === '+' || str[i] === '-') {
          result_of_mult_or_div.push(str[i]);
        } else {
          result_of_mult_or_div.push(this.calculate(result_of_mult_or_div.pop(), str[i], str[++i]));
        }
      }
    }

    const result = [];
    // then do additions and substractions, if any
    for (let i = 0; i < result_of_mult_or_div.length; i++) {
      if (i % 2 === 0) {
        result.push(result_of_mult_or_div[i]);
      } else {
        result.push(this.calculate(result.pop(), result_of_mult_or_div[i], result_of_mult_or_div[++i]));
      }
    }

    return result[0];
  }
}

const calculate = new Calculator();
console.log(calculate.evaluate('127'), 127);
console.log(calculate.evaluate('2 + 3'), 5);
console.log(calculate.evaluate('2 + 3 * 2'), 8);
console.log(calculate.evaluate('2 - 3 - 4'), -5);
console.log(calculate.evaluate('10 * 5 / 2'), 25);
