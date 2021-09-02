/**
 * functions are objects in javascript
 * 
 * they can be passed as argument to another functions same as objects or primitive
 * it can be assigned name same as other objects.
 */

function greet(){
    console.log("Hi");
}

// console.log(greet);// prints out code of function
/*
* properties can be assigned  to functions
*/
greet.language="english";
console.log(greet.language);


/* 
temp();

var temp=function(){
    console.log("i am temp");
} 

in creation phase it set temp=undefined in memory
in execution phase temp is undefined so it throws error as undefined is not function type

output --> TypeError: temp is not a function
*/


function Person(first_name,last_name){
    this.first_name=first_name;
    this.last_name=last_name;
    this.getFullName=function(){
        console.log(this);
        console.log(this.first_name,this.last_name);
    }

}

let akash = new Person("akash","patel");
akash.getFullName()// executed in akash context so `this` refers to akash(Person) 


function globalThis(){
    console.log(this);
}
globalThis();// executed in global context so `this` refers to global context  