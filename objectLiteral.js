let person = {
    id: 1,
    getId: function () {
        return this.id
    },

};
console.log("person.getId()", person.getId())//1
let getId = person.getId
console.log("getId", getId())//undefined- as this uses it's own context not person's context
// console.log(person);