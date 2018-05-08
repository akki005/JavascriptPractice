/**
 * reverse-sorted array is the worst case for insertion sort theta(n^2).
 * already-sorted array is the best case for insertion sort theta(n).
 * 
 * Worst case: Θ(n2) \Theta(n^2) Θ(n2).
 * Best case: Θ(n) \Theta(n) Θ(n).
 * Average case for a random array: Θ(n2) \Theta(n^2) Θ(n2).
 * "Almost sorted" case: Θ(n) \Theta(n) Θ(n).
 */


var input = [1, 9, 8, 4, 3, 6, 7];


function insertionSortSingleFn(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        for (j = i - 1; j >= 0 && array[j] > key; j--) {
            array[j + 1] = array[j];
        }
        /**
         * condition in for loop is being executed after the decrement of j. so we need to increment j by 1 to et vacant place
         */
        array[j + 1] = key;
    }
    return array;
};

console.log(insertionSortSingleFn(input));



function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        insert(array, i - 1, array[i]);
    }
    return array;
}

function insert(array, rightIndex, value) {

    let key = value;

    for (var i = rightIndex; i >= 0 && array[i] > value; i--) {
        array[i + 1] = array[i];
    }

    array[i + 1] = key;

}

input = [1, 9, 8, 4, 3, 6, 7];
console.log(insertionSort(input));