function amicableNumbers(num1, num2) {
    function getDivisors(num) {
        const result = [1];
        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) result.push(i);
        }
        return result;
    }
    
    return (getDivisors(num1).reduce((a, b) => a + b) === num2) &&
        (getDivisors(num2).reduce((a, b) => a + b) === num1);
}

console.log(amicableNumbers(220, 284), true);
console.log(amicableNumbers(220, 280), false);
console.log(amicableNumbers(1184, 1210), true);
console.log(amicableNumbers(220221, 282224), false);