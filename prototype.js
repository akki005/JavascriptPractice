//The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

//The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.


// unlike inline properties and methods inside constructor, properties and methods to prototype can be attached dynamically


//A function's prototype: A function's prototype is the object instance that will become the prototype for all objects created using this function as a constructor.

//An object's prototype: An object prototype is the object instance from which the object is inherited.


function foo() {
    console.log("foo");
}
foo.prototype.test = "i am prototype object of foo";

let temp = new foo();
console.log(temp.__proto__.test);
console.log(temp.__proto__.constructor)// get constructor of object
console.log(foo.prototype === temp.__proto__)


let test = {};// derived from global Object function as there are not function constructor specified
console.log(test.__proto__ === Object.prototype);



// console.log(a);



function Animal(name) {
    this.name = name;
    this.eat = "abc";
}

Animal.prototype.eat = "xyz";

let cat = new Animal("abc");
console.log(cat.eat);
console.log(cat.__proto__.eat);
console.log(cat.hasOwnProperty("name"));//true
console.log(cat.hasOwnProperty("eat"));//false
console.log(Animal.prototype.hasOwnProperty("eat"));//false





