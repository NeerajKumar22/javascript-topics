// Understanding This

/**
 * Whenever we are working with objects this is important to understand the 
 * keyword "this".
 * 
 * And since JavaScript is such as an object focus language, the keyword
 * "this" is the crucial topic.
 * 
 * The binding of "this" what this represents can sometimes to difficult to
 * understand. 
 *
 * There some concepts that can help us to understanding the keyword "this".
 * 
 * Understanding of this(this binding):
 * ======================
 * this is...
 * Established at run time, when a function is invoked.
 * Determined by how a function is invoked, not where the function is defined.
 * A reference to the object.
 * So the value of "this" is always an object.
 * 
 * this is not...
 * The function. Though it is established when the function is invoked,
 * it is not the function.
 * 
 * The binding of the value of this(this binding) can be implicit(set by the JavaScript engine) or explicit(set by us).
 */

// So lets look some examples will help us understand this binding.

var fun1 = function () {
    console.log(this);
}
fun1(); // in console we get a window object like Window
// basically this is being invoked in the global space...

// we could also invoked like
this.fun1();

// this.fun1 // this sows the function with the console statement.

// Now what happened if I add another function.
var fun2 = function () {
    // and invoke the fun1 here
    fun1();
}
// and here we invoke the function fun2
fun2();
// Now what is the binding for this
// this is the window object

// if we use the strict mode then it will give undefined.

// Now we took a look at objects

var obj1 = {
    name: "obj1",
    fun() {
        console.log(this);
    }
}
// Now when we do 
obj1.fun(); // we invoke that
// we can probably guess this is going to the reference of object
// Because we are invoking it from obj1 object.
// that show on the console {name: obj1, fun:f}

// Now we can make it little bit more intreating

var obj2 = {
    name: "obj2",
    fun: obj1.fun
};
// Now what is going to happen, when we do
obj2.fun();
// {name: "obj2", fun: f}

// Now that illustrates the important point, there is not where is the method
// define is important but how the method it is invoked.
// Thats the rule we are talking about, how it is invoked  that determine the
// binding of this
// So this is invoked based on the obj2, that is what this is bound to, the obj2
// not with obj1

// Now let me do one more thing

setTimeout(obj1.fun, 1000);
// this will give the window obj
// because now the obj1.fun is being invoked by window object
// there for the value of this becomes the global object