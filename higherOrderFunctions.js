/**
 *  Higher Order Functions:-
 *  ======================
 *  Function in JavaScript is first class
 *  Function in JavaScript are treated as a value
 *
 *  How do first class functions are related to Higher Order Function and why      are both concepts are necessary ?
 *
 *  Definition of Higher Order Function :-
 *      Higher order functions are functions that operate on other functions by        either taking them as an arguments or returning them. The fact that            JavaScript supports first-class functions makes it possible to create          higher order functions.
 *
 */

let things = ["Building", "car", "bicycle", "automobile", "Tree", "houses"];
things.sort();
console.log(things.sort());
// ["Building", "Tree", "automobile", "bicycle", "car", "houses"]
// Sorting taking place as per ascii key
// Sort does not create a new array when sorts them. Only modifying the existing array. 

// Now, in sort we can passing an arguments. In argument we can passes a function. Therefore sort is a higher order function.

things.sort(function (a, b) {
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if (x < y) {
        return -1;
    }
    if (y < x) {
        return 1;
    }
    return 0;
})
// ["automobile", "bicycle", "Building", "car", "houses", "Tree"]

