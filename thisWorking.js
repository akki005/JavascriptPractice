/**
 * 
 * this file has examples of "this"
 */


var cat = {
    name: "Gus",
    color: "gray",
    age: 15,

    // printInfo is invoked with context of cat so it will have this bind to cat.
    printInfo:  function(){
        console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //prints correctly
        // this function is invoked without any context so it will have this bind to window object
        nestedFunction =  function(){
            console.log(this);
            console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //prints in correctly
        }
        //nestedFunction.call(this);
        nestedFunction();
    }
}
cat.printInfo()