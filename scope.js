// Understanding Scope

// Scope is simply a set of rules that determines where within program you can access referenced items.
// Set of rules where you able to access the variable you have declared.

// 1. Scope is determined lexically.
// Mean: when we write over program, where we place declaration of variables and functions determine scope.

// 2. JavaScript uses function scope
// Means: When a new function is declared that create scope. Everything in JS is a global scope,

// 3. Nested function (nested scope) create a scope chain.
// Means: Declared a function inside a function that create a nested function, that create we called a scope chain.

var a = 10;

var add5 = function (num) {
    var b = 5;

    console.log(num + b);

    var add10 = function (num2) {
        console.log(num2 + a);
    };

    add10(3);
    var add15 = function (num3) {
        var c = 15;
        console.log(num3 + c);
    }
    add15(3);
}
add5(3);

// Difference between let and var
// Scope of variable declared with var is the function or the global environment.
// Scope of variables declared with let is the code block.

var func2 = function () {
    for (var i = 1; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

func2();

// If we convert the var into let in the for loop


var func2 = function () {
    for (let i = 1; i < 5; i++) {
        console.log(i);
    }
    console.log(i)
}

func2();