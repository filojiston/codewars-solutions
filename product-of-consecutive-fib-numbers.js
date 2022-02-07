function productFib(prod){
  let product = 0;
  let i = 0;
  let fibOfI, fibOfIPlusOne;
  while (product < prod) {
    fibOfI = calculateFib(i);
    fibOfIPlusOne = calculateFib(i + 1);
    product = fibOfI * fibOfIPlusOne;
    i++;
  } 
  return product == prod ? [fibOfI, fibOfIPlusOne, true] : [fibOfI, fibOfIPlusOne, false];
}

const calculateFib = (num) => num == 0 || num == 1 ? num : calculateFib(num - 1) + calculateFib(num - 2);


// a nice solution here which does not requires to calculate the fibonacci of the current number
function productFib(prod){
  var n = 0;
  var nPlus = 1;  
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}

// same solution but cleaner syntax
function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

console.log(productFib(4895), [55, 89, true]);
console.log(productFib(5895), [89, 144, false]);
console.log(productFib(74049690), [6765, 10946, true]);
console.log(productFib(84049690), [10946, 17711, false]);
console.log(productFib(193864606), [10946, 17711, true]);
console.log(productFib(447577), [610, 987, false]);
console.log(productFib(602070), [610, 987, true]);