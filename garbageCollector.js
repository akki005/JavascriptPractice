//Memory management

//It monitors all objects and removes those that have become unreachable.

let user = {
    name: "john"
}
//user has a reference to object {name:"john"} 

user = null // now user has no ref to object so it can't be reached so gc will remove it from memory 

let user1 = {
    name: "abc"
}

let admin = user1; // now admin and user1 refers to same object in memory
user1 = null; // now user has no ref to object 
console.log(admin);// but object can still be accessed by admin because it's ref has not been lost
// so admin also needs to be dereferenced for garbage collection otherwise it will live on memory.



function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
        name: "Ann"
    });

delete family.father;
delete family.mother.husband;
console.log(family);


let person={
    name:"akash",
    details:person_details
}

let person_details={
    occupation:"student",
    class:"10"
}

// global-->person-->person_details
// so if we remove reference to person object. person_details will be automatically garbage collected as there are no pointers to person_details object 