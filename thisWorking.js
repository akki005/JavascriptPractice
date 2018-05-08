/**
 * 
 * this file has examples of "this"
 */


var cat = {
    name: "Gus",
    color: "gray",
    age: 15,

    /**
     * 
        An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.
     
        An arrow function does not newly define its own this when it's being executed in the global context; instead, the this value of the enclosing execution context is used, equivalent to treating this as closure value.this comes from the surrounding lexical context
     */
    eatFood: () => {
        console.log(this);
    },

    // printInfo is invoked with context of cat so it will have this bind to cat.
    printInfo: function () {
        console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //prints correctly

          //As arrow function does not create their own "this". so by they will refer "this" of their encloser
          nestedFunction =  ()=>  {
              console.log(this);
              console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //prints correctly
          }
          nestedFunction();


        // this function is invoked without any context so it will have this bind to window object        
         /*  nestedFunction =  function(){
             //console.log(this);
             console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //prints in correctly
         }
         nestedFunction(); 
         //nestedFunction.call(this); */
    }
}
cat.printInfo()
cat.eatFood();