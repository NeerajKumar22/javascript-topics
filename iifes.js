/**
 *  Immediately Invoked Function Expressions (IIFEs);
 Name: This is function expression which is invoked immediately. Infect the function expression is invoked at the time it is define.

 When did we used IIFEs:
 Over code needs to do some set of task when the page load such as setting up an event listeners. We only need to do this once so there is no region to create a reusable function. And by doing it with an IIFEs we prevent to creation a global variable.
 Because it provides a local scope for all of over code that needs to be invoked immediately. This is only one example, for why we need to do it. There are lot of different patterns in JavaScript that are use IIFEs.
 */

// Now we need to under stand how IIFEs works
// Now we take very simple example as a function expression 

let product = function () {
    console.log(5 * 5);
};
// Now invoke the function.
product(); // 25

// Now see the function variable.
console.log(product);
// It contains what we defined in the variable.
/**
 *  f (){
 *      console.log(5 * 5);
 *  }
 */

// Now what we want to do invoked immediately
// We put parenthesis after we had defined it.
let product = function () {
    console.log(5 * 5);
}();

// Let see how that works.
// It still giving 25;

// Now see the function variable;
console.log(product); // undefined
// The variable is no longer necessary

// Now we expression like;
/**
 * 
 function product() {
     console.log(5 * 5)
 } (); // Uncaught SyntaxError: Unexpected token ')'
 */

(function () {
    console.log(5 * 5);
})(); // 25

// Now this is the function expression is now being invoked immediately at the time we defined the function.

/**
 * Now we write the function like this
 * (function(){
 *  console.log(5 * 5);
 * });
 * Now become valid
 * It don't give any syntax error bur also don't give any result;
 */

(function () {
    console.log(5 * 5);
})(); // 25;
// So this is second way to create an IIFE;

// =======================================================================
// Now what happen when we choose an arrow function to create an IIFE;
// Let me create a same arrow function

(() => {
    console.log(5 * 5);
})();
// It will gives 25;

// This is all about IIFE