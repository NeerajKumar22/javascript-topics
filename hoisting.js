// Understanding Hoisting in JavaScript;
// ref to the variables and function deceleration there are lift or raised to the top of your code

// For example

function hoisting() {
    console.log(hoist); // undefined
    var what = "Variable and function deceleration.";
    console.log("What is hoisted? " + what); // What is hoisted? Variable and function deceleration.
    var hoist = "to lift or raise up.";
    console.log("Hoist means " + hoist); // Hoist means to lift or raise up.
}
hoisting();

// Let we take an another example with function expression

sum();
var sum = function () {
    console.log(a + b);
}
var a = 10;
var b = 5;

// TypeError: sum is not a function

// The call must be after the function is declared

var sum = function () {
    console.log(a + b);
}
sum();
var a = 10;
var b = 5;
// Now output is NaN


// If we place at the correct position

var a = 10;
var b = 5;
var sum = function () {
    console.log(a + b);
}
sum();
// Now output is correct 15

// Now another case
// What happen when we declared the variable with let and const

console.log(num);
let num = 100;
// Uncaught ReferenceError: Cannot access 'num' before initialization

// another case

let num;
console.log(num);
num = 100;
// Now output is undefined

// Steps for Avoiding Issue

// 1. Declare variable at the top of there respective scope
// 2. Initialize variable when we declare.
// 3. Use function expression instead of function declaration.


