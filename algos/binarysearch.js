/**
 * time complexity logn
 */


let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 23, 25, 90];


function binarySearch(array, element) {
    let min = 0;
    let max = array.length - 1;
    let find = element;
    let guess;
    while (max >= min) {
        guess = Math.floor((min + max) / 2);
        if (array[guess] > find) {
            max = guess - 1;
        } else if (array[guess] < find) {
            min = guess + 1;
        } else if (array[guess] === find) {
            return guess;
        }
    }
}

console.log(binarySearch(input, 23));