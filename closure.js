/**
 * this file has example of closure.
 * 
 * A closure is the combination of a function and the lexical environment within which that *function was declared.
 * 
 * 
 * A closure is a function that remembers its outer variables and can access them.in JavaScript all functions are naturally closures 
 */




let phrase = "Hello";

function test() {
  let user = "John";

  return function () {// sayhi is inner function and a closure
    let x = 1;
    console.log(`${phrase}, ${user}`);
  }
}

let x = test();
x()



// function sum(a) {
//     return function (b) {
//         return a + b;
//     };
// };

// console.log(sum(1)(2));

/**
 * 
 *  A function remembers it scopes and closure and from where it need to access the variables
 *  try running below code in debug mode with different conditions and see the property named [[Scopes]] of the variable army.
 *                                 very important
 */
// function makeArmy() {
//     let shooters = [];

//     //alternate way 

//     for (let i = 0; i < 10; i++) {
//         let shooter = function () { // shooter function
//             console.log(i); // should show its number
//         };
//         shooters.push(shooter);
//     }

//     return shooters;
// }

// let army = makeArmy();

// army[0](); // the shooter number 0 shows 10
// army[5](); // and number 5 also outputs 10...


/* 
function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }

  var add5 = makeAdder(5);
  var add10 = makeAdder(10);

  console.log(add5(2));  // 7
  console.log(add10(2)); // 12 */

/*   

function b(){
    console.log(myVar);
 }

 function a(){
     var myVar=2;
     b();
 }

 var myVar=1
 a(); 

 output ->> 1
 */

function fn1() {
  var i = 500;
  ++i;
  for (var i = 1; i <= 3; ++i) {
  }
  console.log(i);//4
}

fn1()

function test()  {
  a = 1;
  return function () {
    ++a;
    console.log(a)
  }
}
let test1 = test();
test1()//2