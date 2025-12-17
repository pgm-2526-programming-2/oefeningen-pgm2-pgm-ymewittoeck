const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

console.log(mergeObjects(object1, object2)); // Output: { a: 1, b: 3, c: 4 }