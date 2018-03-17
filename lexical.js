/**
 * this file has examples of lexical scoping.
 * 
 * 
 * 
 * 
 * lexical scoping ---> which describes how a parser resolves variable names when functions are nested. The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope
 * 
 * Function Declarations are special. Unlike let variables, they are processed not when the execution reaches them, but when a Lexical Environment is created
 * 
 * 
 * 
 * When code wants to access a variable – it is first searched for in the inner Lexical Environment, then in the outer one, then the more outer one and so on until the end of the chain.If a variable is not found anywhere, that’s an error in strict mode. Without use strict, an assignment to an undefined variable creates a new global variable, for backwards compatibility.
 * 
 * 
 * A function gets outer variables as they are now; it uses the most recent values.
 * 
 * 
 * A new function Lexical Environment is created each time a function runs. And if a function is called multiple times, then each invocation will have its own Lexical Environment, with local variables and parameters specific for that very run.
 */



function init() {
    let name = 'Lexical'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function  
        let innerFnVar = "inner"; //this can not be accessed by parent fn. it's inside the lexical env created by fn displayName
    }
    displayName();
    //console.log(innerFnVar);
}
init();



/**
 * 
 *  2
 *  A function gets outer variables as they are now; it uses the most recent values.
 */

let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi();