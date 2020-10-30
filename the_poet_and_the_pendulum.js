const pendulum = (values) => values.sort((a, b) => a - b).reduce((a, c, i) => (i % 2 == 0 ? a.unshift(c) : a.push(c), a), []);


console.log(pendulum([4, 10, 9]), [10, 4, 9]);
console.log(pendulum([8, 7, 10, 3]), [8, 3, 7, 10]);
console.log(pendulum([6, 6, 8, 5, 10]), [10, 6, 5, 6, 8]);
console.log(pendulum([9, 4, 6, 4, 10, 5]), [9, 5, 4, 4, 6, 10]);
console.log(pendulum([4, 6, 8, 7, 5]), [8, 6, 4, 5, 7]);
console.log(pendulum([10, 5, 6, 10]), [10, 5, 6, 10]);
console.log(pendulum([11, 12, 12]), [12, 11, 12]);