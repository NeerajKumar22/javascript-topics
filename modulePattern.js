// Module Patterns

/**
 *  The traditional Module Patterns:
 *      The purpose of this module patterns is to create self contain code that        avoids collision.
 * 
 *  Advantages of a Module:
 * 
 *  1.) Avoid Collision(Name Space):
 *          In JavaScript the global variables are available all over. 
 *          And can be written by other code over people working on the same               project.
 *          So the idea of avoiding the creation of variables that could                   collide with the variable of the same name some one else is created            in the same space.
 *          So creating of modules helps to avoid those problems.
 *          So we can use anywhere between over code we won't have worry about             whether that variable is unique enough or not.
 *  
 *  2.) Reusability:
 *          Well written modules are easier to reuse. We can take that module              that piece of code and can plug it in. 
 *          Because a well written modules of contained. We don't have make an             adjustments for code we put it in or make an adjustments to the                module itself.
 * 
 *  3.) Maintainability:
 *          A module is also easier to maintain. That's because as maintain a              module is the couple from all the other code that maybe a part of              the project.
 *          So we can easily go update that we don't have to worry  about those            updates effecting the code some where else in the project.
 */

// So here we take an example:

/**
 *  I have created a function. Communication is the name of the function.
 *  Inside of it I have created two variables. greet variable and goodbye          variable.
 *  So the idea is this module is handel communication and right now over          deleing is with greetings.
 *  So we have greet and goodbye variables. And a function greeting use the        string templates that gives name and greeting together and display in the      console.
 *  We also have a function getGreet and this function gets the                    greeting message.
 * 
 *  Now a module is a function and that's because a function has its own scope.
 *  So anything we create inside the function we don't have to worry about the     collisions. We don't have to worry about the interfering code outside of       that function.
 *  So because of that scope, a function has a fantastic structure for the          module. A self contain piece of code.
 *  Now the other advantage of using a function  for module is "closure". This     function create closure
 *  So anything in this function we will have access to, even when the function    is done, is finished, is no longer executed.
 *  We still have the actions to the variables greet and goodbye, and the          functions getGreet and greeting. Because of closure.
 */

function communication() {
    let greet = "Hello";
    let goodBye = "So long";

    const getGreet = function () {
        let d = new Date();
        if (d.toLocaleTimeString().includes("AM")) {
            greet = "Good Morning";
        } else {
            greet = "Hello";
        }
        return greet;
    };

    const greeting = function (name) {
        console.log(`${getGreet() + name}! Welcome to the notes.`);
    };
};

// So in the console I can create a global variable COMM
var COMM = communication();
// I don't have any access to the communication

// Now I want be able to use the greeting function. and other things I am going    to keep private.

// So how do I make the greeting available outside of the communication            function.

// Here is the method to make the greeting public

function communication() {
    let greet = "Hello";
    let goodBye = "So long";

    const getGreet = function () {
        let d = new Date();
        if (d.toLocaleTimeString().includes("AM")) {
            greet = "Good Morning";
        } else {
            greet = "Hello";
        }
        return greet;
    };

    const greeting = function (name) {
        console.log(`${getGreet() + name}! Welcome to the notes.`);
    };
    // Public methods and properties
    return {
        // we can use the same name or different name like
        // greeting : greeting
        // greetUser : greeting
        // here we use the different name...
        greetUser: greeting
    }
};

// Now we can see the greeting function outside, Like

console.log(COMM.greetUser("Neeraj"));
// Good Morning Neeraj! Welcome to the notes.

// So we made a self contained module.
// Now, this could be used for multiple global variables like
// COMM1, COMM2, XYZ etc.

// But many times when module patterns we use in javascript it uses single, it     uses once

// In that case, we use an IIFE, to have it invoke immediately and set up          immediately.

// So make this function IIFE.

var COMM = (function () {
    let greet = "Hello";
    let goodBye = "So long";

    const getGreet = function () {
        let d = new Date();
        if (d.toLocaleTimeString().includes("AM")) {
            greet = "Good Morning";
        } else {
            greet = "Hello";
        }
        return greet;
    };

    const greeting = function (name) {
        console.log(`${getGreet() + name}! Welcome to the notes.`);
    };
    // Public methods and properties
    return {
        // we can use the same name or different name like
        // greeting : greeting
        // greetUser : greeting
        // here we use the different name...
        greetUser: greeting
    }
})();

COMM.greetUser("Neeraj");

// This is all about the module patterns