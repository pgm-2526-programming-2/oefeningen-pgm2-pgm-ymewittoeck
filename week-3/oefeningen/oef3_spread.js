const originalObject = { name: "Alice" };

function addProperty(obj, key, value) {
    return newObj = { ...obj, [key]: value };
}

console.log(addProperty(originalObject, "age", 25));