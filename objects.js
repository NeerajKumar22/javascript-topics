// Objects are everywhere

// JavaScript Data types
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt
// 8. Objects

// First 7 data types are primitives, these are immutable means they cannot be change

// here are  several things that are setup, these all are objects
const testFun = () => "Test Function";
console.dir(testFun); // then it give the function in form of object
// and we can see the properties and methods
// for example  the length property of the function that indicates how many arguments  passed in the function. 
// And in all type of objects in javascript associated with prototype and in which additional methods we are calling.
// now we can add over own property
console.log(testFun.today = new Date()); // Wed Jan 08 2020 15:15:34 GMT+0530 (India Standard Time)

const newArray = [1, 2, 3, 4, 5, 6];
console.log(newArray);
// now we can add own properties
// for example we can add name property
newArray.name = "Neeraj";
console.log(newArray.name);

const str = "New String"
console.log(str.length); // 10
console.log(str.split()); // ["new String"]
console.log(str.split('')); // ["n", "e", "w", " ", "S", "t", "r", "i", "n", "g"]
console.log(str.split(" ")); // ["new", "String"]
console.log(str.split(" ").length); // 2

const obj = { name: "Neeraj" };
console.log(obj) // {name: "Neeraj"}

const today = new Date();
console.log(today) // // Wed Jan 08 2020 15:15:34 GMT+0530 (India Standard Time)

const set = new Set(newArray);
console.log(set) // Set(5) {1, 2, 3, 4, 5}

const map = new Map();
console.log(map) // Map(0) {}