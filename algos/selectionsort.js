let input = [12, 43, 5, 4, 556, 756, 32];

function sort(array) {
    var minIndex;
    for (let i = 0; i < array.length; i++) {
        minIndex = getMinIndex(array, i);
        swap(array, i, minIndex);
    }
    return array;
};

function getMinIndex(array, startIndex) {
    let minValue = array[startIndex];
    let minIndex = startIndex;

    for (let i = startIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }

    return minIndex;
}

function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

console.log(sort(input));



function selectionSortSingleFn(array) {

    var minIndex;

    for (let i = 0; i < array.length; i++) {
        minIndex = i;

        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }

    return array;

}
input = [1, 3, 5, 6, 2, 4];
console.log(selectionSortSingleFn(input));