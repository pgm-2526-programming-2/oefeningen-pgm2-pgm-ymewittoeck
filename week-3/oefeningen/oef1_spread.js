const originalArray = [1, 2, 3];
function copyArr(arr) {
    return [...arr];
}
copyArr(originalArray);
console.log(copyArr(originalArray)); // Output: [1, 2, 3]