// console.log(a);// a is not defined - ReferenceError

//console.log(a) // undefined
// var a; 

// console.log(a); //a is not defined - ReferenceError
//let a;

/* a();
function a(){
    console.log("a"); 
} 
output --> a
*/
// console.log(a); //a is not defined - ReferenceError
// let a=10;


// console.log(a) 
// var a; 

testFn();//not a function, at this line only declaration is available of variable testFn but not definition or assignment
var testFn = () => {
    console.log("Hello");
}