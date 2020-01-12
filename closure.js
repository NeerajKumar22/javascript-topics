// Closure
// Closure is close to related to the scope, so I want to define scope briefly
/**
 * JavaScript use function scope:
 * Means: function determine the scope of the items that are declared within the function.
 */

/**
 *  Closure Defined: 
 * 
 *  1.) A closure is the local variable for a function. - kept alive after the         function has returned. 
 *  Meaning: When the function is finished, those variable are still accessible.
 * 
 *  2.) Closure is when a function is able to remember and access its lexical          scope even when the function is executing outside its lexical scope.
 * 
 *  3.) A Closure is a function having access to parent scope, even after the          parent function has closed.
 */

/**
 *  So lets begin with some examples:
    Here funct2 inside of the function funct. It is part of the scope of the funct. And funct3 is completely outside of the scope of the function funct.

    funct2 have the access of the var a and var b, but it is executed inside of the scope because funct2 is called before function funct is completely finished

 */


var funct = function funct() {
    var a = 2;
    b = 3;
    var funct2 = function funct2() {
        console.log(a + b);
    }
    funct2();
}
var funct3 = function funct3() {
    console.log(a + b);
}

funct();
funct3();

// So lets make a change that will show closer
// and grate way to do that is with callbacks.
// Callbacks are definitely function that executed outside of the scope.


var funct = function funct() {
    var a = 2;
    b = 3;
    var funct2 = function funct2() {
        console.log(a + b);
    }
    /**
     *  This is a function that allows we to call and executed code after the      certainly the time. It will take two parameters, the first the code        that will executed(usually that is entered as a function normally as a     anonymous function, in this case we are just calling a function.). And     the second parameter is the number of milliseconds that should wait        before its call that code(in this case 1000 milliseconds is 1 second).
     */
    setTimeout(funct2, 1000);
}
// When we call this 
funct(); // 5

// It gives the result, after taking the pause of one second
// Then we say that the var a and var b are accessible inside of the funct2.

// ==========================================================================

// Now we take another example
// This is also use callbacks but with event handler.

var counter = function counter() {
    var cnt = 0;
    item1 = document.querySelector("#item1");
    item2 = document.querySelector("#item2");

    var print = function print() {
        console.log(cnt);
    };
    item1.addEventListener("click", function count1() {
        cnt++;
        print();
    })
    item2.addEventListener("click", function count2() {
        cnt++;
        print();
    })
    // Now cnt is accessible into the whole counter before it is finished.
}

    // Now we make it IIFE
    (function counter() {
        var cnt = 0;
        item1 = document.querySelector("#item1");
        item2 = document.querySelector("#item2");

        var print = function print() {
            console.log(cnt);
        };
        item1.addEventListener("click", function count1() {
            cnt++;
            print();
        })
        item2.addEventListener("click", function count2() {
            cnt++;
            print();
        })
    }()
    );

/**
 *
    Now we can see the two buttons, click on one button there is increment in the console. Now click again the increment is happen prints out 2. Even if i click on second button which executes entirely different function. its still retains the value and increments by 1. now its prints 3. Because they both have access to the same scope.
 */

/**
 * One way to describe this is that the count1 has closer over the scope of      counter. And we could say about count2 as well.
 *
 * And another way to describe the count2 still retains the reference to the     scope of the counter.
 *
 * And we call that closure
 */

// This all about closure