let counter = (function () {
    // private variable to counter
    let _count = 0;

    return {
        increment: function () {
            _count++;
        },
        value: function () {
            return _count;
        }
    }
})();

console.log(counter.value());
console.log(counter.value());
