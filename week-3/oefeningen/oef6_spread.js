combineAllArrays([10, 12], [5, 4]); // [10, 12, 5, 4]
combineAllArrays([10, 12], [5, 4], [6, 6, 6]); // [10, 12, 5, 4, 6, 6]

function combineAllArrays(...rest) {
    return rest.flat()
}

console.log(combineAllArrays([10, 12], [5, 4], [6, 6, 6]))