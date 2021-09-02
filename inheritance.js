var Person = function(name){
    this.name=name;
}

Person.prototype.greet=function(){
    console.log(`Hi - ${this.name}`);
}

var Employee = function(title){
    //call super class constructor
    Person.call(this,title);// call Person with current context
    this.title=title;
}

// extent base class
Employee.prototype=Object.create(Person.prototype);

let akash = new Employee("Akash");
console.log(akash);
akash.greet();