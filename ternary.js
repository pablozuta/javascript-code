// program to check pass or fail (it work on the browser)
/* let marks = prompt("Enter your marks : ");

// check the condition
let result = (marks >= 40)? 'pass' : 'fail';
console.log(`You ${result} the exam.`); */

//Nested Ternary Operators
let a = 3;
let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The result is ${result} the number was ${a}.`);

// Other Example
let age = 15;
let message;
age >= 16 ? 
(message = `You can drive because your age is ${age}`) : 
(message = `You cannot drive because your age is ${age}`);
console.log(message);
