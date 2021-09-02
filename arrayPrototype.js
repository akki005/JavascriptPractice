Array.prototype.odd = function () {
    return this.filter((ele) => ele % 2 != 0);
}

let x=[1,2,3]
console.log(x.odd())