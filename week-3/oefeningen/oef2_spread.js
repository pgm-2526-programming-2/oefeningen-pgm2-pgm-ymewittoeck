const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function mergeArray(a, b) {
    return [...a, ...b];
}

console.log(mergeArray(array1, array2)); // Output: [1, 2, 3, 4, 5, 6]