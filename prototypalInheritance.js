// Prototypal Inheritance
/**
 *  What the prototype is? 
 * 1. All most every javascript objects have an internal property which is a reference to another object that object is refer to as prototype.
 * 
 * 2. Every object is link to another object. That linked object is called prototype.
 *  
 * 3. Objects inherit properties and methods from it's prototype ancestry. 
 * the word inherit mean that the object have to the access to those properties and methods it can use them. They don't belong to the objects, they are not part of the object. They are part of the object prototype
 * we use the object prototype because the prototype also have a prototype this is called the prototype chain. that's why we use prototype ancestry.
 * 
 * 4. A prototype is automatically assigned to any objects
 * 
 * 5. We can define an objects prototype
 */

var obj = {};
console.log(obj); // {} with a dander proto or prototypal chain
var newObj = obj.toString();
console.log(newObj); // [object Object] 
obj.toString = function () { console.log("Object") };
// ƒ (){console.log("Object")}
obj.toString();
// Object

var arr = [1, 2, 3];
console.log(arr);
arr.indexOf(2); // 1

arr.toString();
// "1,2,3";


/**
 *  How we can set the prototype ?
 * 
 *  Three methods for setting the prototype
 *  1. Using a constructor function
 *  2. Using Object.create(prototype)
 *  3. Using Object.setPrototypeOf(obj, prototype) -- ES6
 */

// 1. Using a constructor function

var objProto = {
    greet: function () {
        console.log(this.greeting + "World")
    }
};

var Greeting = function (term) {
    this.greeting = term;
}

Greeting.prototype = objProto;

var obj1 = new Greeting("Neeraj");

console.log(obj1.greet()); // NeerajWorld
console.log(obj.greeting) // "Neeraj"
console.log(obj1);
// Now we can see the the greet() function is part of the prototype

// 2. Using Object.create(prototype)

var obj2 = Object.create(objProto);
obj2.greeting = "Hi";
obj2.greet(); // HiWorld
// Now we can see the greeting in the object and greet() function of the prototype 

// 3. Using Object.setPrototypeOf(obj, prototype)

var obj3 = {
    greeting: "Hello"
}

Object.setPrototypeOf(obj3, objProto);
obj3.greet(); // HelloWorld
// If now we open the prototype chain of the object then we can see the greeting in the object and greet() function of the prototype

