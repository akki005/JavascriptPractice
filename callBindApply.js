// all methods allows to borrow functionality from another objects

/**
 * 
 * 
 * bind() ->  bind() method creates a new function that, when called, has its this keyword set to the provided value,
 * 
 */
/**
 *
 * 
 * Call(), apply() are same only difference is apply takes all arguments as array
 *
 */
function greet(count) {
    console.log(`Hi - ${this.first_name} ${this.last_name} - count ${count}`);
}

let person = {
    first_name: "akash",
    last_name: "patel",
}

greet.call(person, 1);// to bound  context of greet to person this === person
greet.apply(person, [1]);// to bound  context of greet to person this === person

console.log(greet.bind(person));// as bind return function it prints out function
let bounded = greet.bind(person);
bounded(3);// executes bounded function

// if no arguments provided call() will bound to global context


//call 
function argsToArray() {
    console.log(arguments);
    console.log([].slice.call(arguments));// borrowing slice method available on array object
}

argsToArray(1, 2, 3);

// apply

let a = [1, 2, 3];
console.log("Min", Math.min.apply(null, a));


// bind

let myobj = {
    parse: function () {
        console.log("parse called");
    },
    render: function () {
        setTimeout(function () {
            this.parse();
        }.bind(this));// binding myobj's context (`this`) to argument function
    }
}

myobj.render();